import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import { Link } from 'react-router-dom';

export default function Color(props) {
  const params = props.location.search;
  const color = props.match.params.color;
  const mat = props.match.params.mat;
  const state = {
    name: props.match.params.color,
    type: props.match.params.mat,
    loaded: false,
    item: null
  };
  state.item = useStoreState(state => state.getColor({ color, mat }));

  return state.item ? (
    <Fragment>
      <div className="twoColumn">
        <div className="card-panel">
          <Link to={'../../colors' + params} className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.name}</h2>
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