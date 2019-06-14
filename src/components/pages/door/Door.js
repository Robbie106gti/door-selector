import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';

export default function Door(props) {
  // const door = useStoreState(state => state.doors[props.match.params.door]); <h1>{door.title}</h1>

  return (
    <Fragment>
      
      <h1>{props.match.params.door}</h1>
      
      
    </Fragment>
  );
}