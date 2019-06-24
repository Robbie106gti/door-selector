import React from 'react';
import { Link } from 'react-router-dom';

export default function notfound(props) {
  const params = + props.location.search;
  return (
    <div>
      <h1>The page you are looking for is not found: 404</h1>
      <p>Sorry for your inconvenience</p>
      <Link to={"/about" + params}>About</Link>
      <br />
      <Link to={"/" + params}>Home</Link>
    </div>
  );
}
