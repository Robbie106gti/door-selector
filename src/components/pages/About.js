import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="card-panel">
      <h1>About Door Selector</h1>
      <p>Selector your door and material</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/materials">Materials</Link></li>
        <li><Link to="/doors">Doors</Link></li>
        <li><Link to="/stains">Stains</Link></li>
        <li><Link to="/edges">Edges</Link></li>
        <li><Link to="/colors">Colors</Link></li>
      </ul>      
    </div>
  );
}
