import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated({ username, onLogout }) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('losses');
        onLogout();
      });
  }

  return (
    <>
      <p>You are currently logged in as {username}</p>
        <button
          className="login-button"
          type="submit"
          onClick={() => navigate('/')}
        >
          Play
        </button>

        <button
          className="login-button"
          type="submit"
          onClick={() => logout()}
        >
          Logout
        </button>
    </>
  );
}
