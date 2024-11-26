import React from 'react';

export function Unauthenticated({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('username', username);
      const body = await response.json();
      localStorage.setItem('losses', body.losses);
      onLogin(username, body.losses);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }


  return (
    <>
      <p>{displayError}</p>
      <div className="login-div">
        <span className="login-span">Username</span>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="login-div">
        <span className="login-span">Password</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button
        className="login-button"
        onClick={() => loginUser()}
        disabled={!username || !password}
      >
        Login
      </button>
      <button
        className="login-button"
        onClick={() => createUser()}
        disabled={!username || !password}
      >
        Create
      </button>
    </>
  );
}
