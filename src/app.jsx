import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './app.css';
import { Game } from './game/game';
import { Login } from './login/login';
import { Scores } from './scores/scores';

export default function App() {
  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  const [userLosses, setUserLosses] = React.useState(localStorage.getItem('losses') || 0);
  const currentlyAuthorized = username ? true : false;
  const [authorized, setAuthorized] = React.useState(currentlyAuthorized);

  return (
    <BrowserRouter>
      <div className='body'>
        <header>
          <ul className="navigation-menu">
            <li><NavLink to="">Game</NavLink></li>
            <div></div>
            <li><NavLink to="login">Login</NavLink></li>
            <div></div>
            {authorized === true && (
              <li><NavLink to="scores">Scores</NavLink></li>
            )}
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
          <Route path='/' element={
            <Game
              username={username}
              userLosses={userLosses}
              setUserLosses={(newLosses) => { setUserLosses(newLosses); }}
            />
          } exact />
          <Route path='/login' element={
            <Login
              username={username}
              authorized={authorized}
              onAuthChange={(newUsername, newLosses, newAuthorized) => {
                setAuthorized(newAuthorized);
                setUsername(newUsername);
                setUserLosses(newLosses);
              }}
            />
          } />
          <Route path='/scores' element={<Scores username={username} />} />
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
