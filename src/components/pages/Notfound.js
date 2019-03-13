import React from 'react';
import { Link } from 'react-router-dom';

export default function notfound() {
  return (
    <div>
      <h1>The page you are looking for is not found: 404</h1>
      <p>Sorry for your inconvenience</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
