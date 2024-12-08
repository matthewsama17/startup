const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

app.get('/letter', (_req, res) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const index = Math.floor(Math.random() * 26)
  res.send({ letter:  letters[index] });
});

app.get('/winner/:data', (_req, res) => {
  const squares = decodeSquares(_req.params.data);

  res.send({ winner: calculateWinner(squares) });
});

app.get('/move/:data', (_req, res) => {
  const squares = decodeSquares(_req.params.data);

  if(calculateWinner(squares) === null) {
    makeMove(squares);
  }

  const squareString = encodeSquares(squares);
  res.send({ data: squareString });
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function makeMove(squares) {
  const index = decideMove(squares);
  if(index !== 10) {
    squares[index] = "X";
  }

  return squares;
}

function decideMove(squares) {
  let emptySpots = [];
  let numX = 0;
  let numO = 0;

  for(let i = 0; i < 9; i++) {
    if(squares[i] === null) {
      emptySpots.push(i);
    }
    else if(squares[i] === "X") {
      numX += 1;
    }
    else if(squares[i] === "O") {
      numO += 1;
    }
  }

  if((emptySpots.length === 0) || (numX > numO)) {
    return 10;
  }

  let index = 10;
  index = checkWinningMove(squares, emptySpots, "X");
  if(index !== 10) {
    return index;
  }

  index = checkWinningMove(squares, emptySpots, "O");
  if(index !== 10) {
    return index;
  }

  if(numX === 0) {
    index = Math.floor(Math.random() * 5);
    if(index !== 4) {
      index = 0;
    }

    return index;
  }
  else if(numX === 1) {
    if(squares[0] === "X") {
      if(squares[1] === "O") {
        return 6;
      }
      if(squares[2] === "O") {
        return 3;
      }
      if(squares[3] === "O") {
        return 1;
      }
      if(squares[4] === "O") {
        return 8;
      }
      if(squares[5] === "O") {
        return 6;
      }
      if(squares[6] === "O") {
        return 8;
      }
      if(squares[7] === "O") {
        return 6;
      }
      if(squares[8] === "O") {
        return 2;
      }
    }
  }
  else if(numX === 2) {
    if(squares[0] === "X" && squares[6] === "X" && squares[1] === "O") {
      return 8;
    }
    if(squares[0] === "X" && squares[1] === "X") {
      return 4;
    }
    if(squares[0] === "X" && squares[6] === "X" && squares[7] === "O") {
      return 2;
    }
    if(squares[0] === "X" && squares[2] === "X") {
      return 6;
    }
  }

  return randomMove(emptySpots);
}

function checkWinningMove(squares, emptySpots, team) {
  for(let i = 0; i < emptySpots.length; i++) {
    squaresCopy = [...squares];
    squaresCopy[emptySpots[i]] = team;
    if(calculateWinner(squaresCopy) === team) {
      return emptySpots[i];
    }
  }
  return 10;
}

function randomMove(emptySpots) {
  const index =  Math.floor(Math.random() * emptySpots.length);
  return emptySpots[index];
}

function encodeSquares(squares) {
  let result = "";
  for(let i = 0; i < 9; i++) {
    if(squares[i] === null) {
      result += "N";
    }
    else {
      result += squares[i];
    }
  }
  return result;
}

function decodeSquares(string) {
  const squares = [string[0], string[1], string[2], string[3], string[4], string[5], string[6], string[7], string[8]];

  for(let i = 0; i < 9; i++) {
    if(squares[i] === "N") {
      squares[i] = null;
    }
  }

  return squares
}

//Database Section
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/test', async (req, res) => {
  res.send({ output: 'Working!' });
});

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.username, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
      losses: user.losses,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);

  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({
        id: user._id,
        losses: user.losses,
      });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});


// GetScores
secureApiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// AddLoss
secureApiRouter.post('/score', async (req, res) => {
  await DB.addLoss(req.body.username);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
