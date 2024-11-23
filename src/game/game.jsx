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
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
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

  function handleClick(i) {
    const newSquares = squares.slice();

    if(squares[i] == null) {
      newSquares[i] = "X";
      setSquares(newSquares);
    }
    else {
      newSquares[i] = null;
      setSquares(newSquares);
    }

    let squareString = "";
    for(let i = 0; i < 9; i++) {
      if(newSquares[i] === null) {
        squareString += "N";
      }
      else {
        squareString += newSquares[i];
      }
    }

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
