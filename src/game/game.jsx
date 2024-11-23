import React from 'react';
import { useState } from 'react';
import './game.css';

export function Game() {
  return (
    <main className="game-main">
      <p className="game-p">Player: <span id="player-name">Mystery Player</span></p>
      <Board />
    </main>
  );
}

function Square({ value, onSquareClick }) {
  let color = "#ff0";
  if (value === "X") {
    color = "#f0f";
  }
  const colorStyle = { color: color };

  return (
    <button className="square" onClick={onSquareClick} style={colorStyle}>{value}</button>
  );
}

function ResetButton({ onButtonClick }) {
  return (
    <div>
      <button className="game-button" onClick={onButtonClick}>RESTART</button>
    </div>
  )
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerString, setWinnerString] = useState(null);
  const [xNext, setXNext] = useState(true);


  function handleClick(i) {
    let newSquares = userMove(i);
    checkWinner(newSquares);
  }

  function userMove(i) {
    const newSquares = squares.slice();

    if(squares[i] == null && winnerString == null) {
      if(xNext) {
        newSquares[i] = "X";
        setXNext(false);
      }
      else {
        newSquares[i] = "O";
        setXNext(true);
      }
      setSquares(newSquares);
    }

    return newSquares;
  }

  function checkWinner(newSquares) {
    let squareString = encodeSquares(newSquares);

    fetch('/winner/'+squareString)
      .then((response) => response.json())
      .then((response) => {
        const winner = response["winner"];
        if(winner === null) {
          setWinnerString(null);
        }
        else {
          setWinnerString(winner+" wins!");
        }
      });
  }

  function onReset() {
      setSquares(Array(9).fill(null));
      setWinnerString(null);
      setXNext(true);
  }

  return (
    <>
      <p className="game-p">{winnerString}</p>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <ResetButton onButtonClick={onReset} />
    </>
  );
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
