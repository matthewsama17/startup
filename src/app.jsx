import React from 'react';
import './app.css';

export default function App() {
  return (
    <div className='body'>
      <header>
        <ul className="navigation-menu">
          <li><a href="index.html">Game</a></li>
          <div></div>
          <li><a href="login.html">Login</a></li>
          <div></div>
          <li><a href="scores.html">Scores</a></li>
        </ul>
        <div className="title">
          <p id="title-1">WEBSITE</p>
          <p id="title-2">that</p>
          <p id="title-3">BEATS YOU</p>
          <p id="title-4">at</p>
          <p id="title-5">TIC TAC TOE</p>
        </div>
      </header>

      <main>App components go here</main>

      <footer>
        <p id="Author">Matthew Herron</p>
        <a href="https://github.com/matthewsama17">His github</a>
      </footer>
    </div>
  );
}
