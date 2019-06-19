import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="card-panel">
      <h1>About Door Selector</h1>
      <p>Selector your door and material</p>
      <Link to="/">Home</Link>
      <Link to="/materials">Materials</Link>
      <Link to="/doors">Doors</Link>
    </div>
  );
}
