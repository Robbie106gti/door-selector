import React from 'react';
import { Link } from 'react-router-dom';

export default function silly() {
  return (
    <div>
      <h1>Silly me silly</h1>
      <p>A silly page just for routing</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
