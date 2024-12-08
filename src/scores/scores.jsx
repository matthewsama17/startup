import React from 'react';
import { useState } from 'react';
import { ButtonEvent, ButtonNotifier } from './buttonNotifier';
import './scores.css';

export function Scores({ username }) {
  const [scores, setScores] = React.useState([]);

  const [guestUsername, setGuestUsername] = React.useState('');
  const [guestColor, setGuestColor] = React.useState('#000');
  const colorStyle = { 'background-color': guestColor };

  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });
  }, []);

  const scoreRows = [];
  for (const [i, score] of scores.entries()) {
    scoreRows.push(
      <tr key={i+1}>
        <td>{i+1}</td>
        <td>{score.username}</td>
        <td>{score.losses}</td>
      </tr>
    );
  }


  React.useEffect(() => {
    ButtonNotifier.addHandler(handleButtonEvent);

    return () => {
      ButtonNotifier.removeHandler(handleButtonEvent);
    };
  });

  function handleButtonEvent(event) {
    setGuestUsername(event.username);
    setGuestColor(event.color);
  }

  function handleClick() {
    const color = randomColor();
    setGuestUsername(username);
    setGuestColor(color);
    ButtonNotifier.broadcastEvent(username, color);
  }

  function randomColor() {
    const colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0'];
    const index = Math.floor(Math.random() * 6);
    return colors[index];
  }

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const apiUrl = `https://picsum.photos/id/${data[0].id}/250/250`;
        setImageUrl(apiUrl);
      })
      .catch();
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>{scoreRows}</tbody>
      </table>
      <div>
        <button className="scores-button" style={colorStyle} onClick={handleClick}>{guestUsername}</button>
      </div>
      <img src={imageUrl} alt='stock background' />
    </main>
  );
}
