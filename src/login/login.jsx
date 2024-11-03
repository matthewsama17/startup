import React from 'react';
import './login.css';

export function Login() {
  return (
    <main>
      <form method="get" action="index.html">
        <div className="login-div">
          <span className="login-span">Username</span>
          <input type="text" />
        </div>
        <div className="login-div">
          <span className="login-span">Password</span>
          <input type="password" />
        </div>
        <button className="login-button" type="submit">Login</button>
        <button className="login-button" type="submit">Create</button>
      </form>
    </main>
  );
}
