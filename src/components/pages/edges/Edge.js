import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import { Link } from 'react-router-dom';

export default function Material(props) {
  const state = {
    name: props.match.params.material,
    loaded: false,
    item: null
  };
  state.item = useStoreState(state =>
    state.edges.getEdge(props.match.params.edge)
  );
  return state.item ? (
    <Fragment>
      <div className="twoColumn">
        <div className="card-panel">
          <Link to='../edges' className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.item.title}</h2>
        </div>
        <div className="card-panel">
        </div>
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}