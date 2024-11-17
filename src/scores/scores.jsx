import React from 'react';
import './scores.css';

export function Scores() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const apiUrl = `https://picsum.photos/id/${data[0].id}/400/200`;
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Charlie Chaplin</td>
            <td>1201</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Charlie Brown</td>
            <td>15</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Charlie Bucket</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <img src={imageUrl} alt='stock background' />
    </main>
  );
}
