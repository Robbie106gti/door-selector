import React, { Fragment } from 'react';
import { useStore } from 'easy-peasy';
import { Link } from 'react-router-dom';

export default function Door() {
    const doors = useStore(state => state.doors);

  return (
    <Fragment>
      <h1>Silly me silly</h1>
      <p>A silly page just for routing</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
    </Fragment>
  );
}