import React from 'react';
import { useState } from 'react';
import './game.css';

export function Game() {
  return (
    <main className="game-main">
      <p className="game-p">Player: <span id="player-name">Mystery Player</span></p>
      <Board />
      <div>
        <button className="game-button">RESTART</button>
      </div>
    </main>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    if(value == null) {
      fetch('/letter')
        .then((response) => response.json())
        .then((response) => {
          setValue(response["letter"]);
        });
    }
    else {
      setValue(null);
    }
  }

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}


function Board() {
  return (
    <div className="board">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
