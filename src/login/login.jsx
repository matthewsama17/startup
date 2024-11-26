import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({ username, authorized, onAuthChange }) {
  return (
    <main>
      {authorized === true && (
        <Authenticated
          username={username}
          onLogout={() => onAuthChange('', 0, false)}
        />
      )}
      {authorized === false && (
        <Unauthenticated
          onLogin={(loginUsername, loginUserLosses) => onAuthChange(loginUsername, loginUserLosses, true)}
        />
      )}
    </main>
  );
}
