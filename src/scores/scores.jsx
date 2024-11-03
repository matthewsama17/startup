import React from 'react';
import './scores.css';

export function Scores() {
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
      <div id="ISS-location">
        **ISS Current Location Here**
      </div>
    </main>
  );
}
