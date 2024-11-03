import React from 'react';
import './game.css';

export function Game() {
  return (
    <main className="game-main">
      <p className="game-p">Player: <span id="player-name">Mystery Player</span></p>
      <img src="/tictactoe.png" width={400} />
      <div>
        <button className="game-button">RESTART</button>
      </div>
    </main>
  );
}
