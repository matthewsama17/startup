import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './app.css';
import { Game } from './game/game';
import { Login } from './login/login';
import { Scores } from './scores/scores';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <header>
          <ul className="navigation-menu">
            <li><NavLink to="">Game</NavLink></li>
            <div></div>
            <li><NavLink to="login">Login</NavLink></li>
            <div></div>
            <li><NavLink to="scores">Scores</NavLink></li>
          </ul>
          <div className="title">
            <p id="title-1">WEBSITE</p>
            <p id="title-2">that</p>
            <p id="title-3">BEATS YOU</p>
            <p id="title-4">at</p>
            <p id="title-5">TIC TAC TOE</p>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Game />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <p id="Author">Matthew Herron</p>
          <a href="https://github.com/matthewsama17">His github</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}
