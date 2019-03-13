import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>About Door Selector</h1>
      <p>Selector your door and material</p>
      <Link to="/silly">Silly</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
