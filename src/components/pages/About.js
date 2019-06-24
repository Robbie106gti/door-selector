import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  const params = props.location.search;
  return (
    <div className="card-panel">
      <h1>About Door Selector</h1>
      <p>Selector your door and material</p>
      <ul>
        <li><Link to={"/" + params}>Home</Link></li>
        <li><Link to={"/materials" + params}>Materials</Link></li>
        <li><Link to={"/doors" + params}>Doors</Link></li>
        <li><Link to={"/stains" + params}>Stains</Link></li>
        <li><Link to={"/edges" + params}>Edges</Link></li>
        <li><Link to={"/colors" + params}>Colors</Link></li>
      </ul>
    </div>
  );
}
