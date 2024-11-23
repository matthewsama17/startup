const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.get('/letter', (_req, res) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const index = Math.floor(Math.random() * 26)
  res.send({ letter:  letters[index] });
});

app.get('/winner/:data', (_req, res) => {
  const squares = decodeSquares(_req.params.data);

  res.send({ winner: calculateWinner(squares) });
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

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
