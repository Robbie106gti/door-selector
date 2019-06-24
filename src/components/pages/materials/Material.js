import React, { Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Loading from '../../fragments/loading';
import Subs from './Subs';
import { Link } from 'react-router-dom';

export default function Material(props) {
  const params = props.location.search;
  const state = {
    name: props.match.params.material,
    loaded: false,
    stop: false,
    section: null,
    items: []
  };
  state.section = useStoreState(state =>
    state.materials.getSection(props.match.params.material)
  );
  useStoreActions(state => state.materials.clickedMat(props.match.params.material));
  return state.section !== null ? (
    <Fragment>
      <div className="twoColumn">
        <div className="card-panel">
          <Link to={'../materials' + params} className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.section.title}</h2>
        </div>
        <div className="card-panel">
          <Subs section={state.section} key='Subset' />
        </div>
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}
