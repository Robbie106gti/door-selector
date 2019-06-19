import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import uuid from 'uuid';
import Loading from '../../fragments/loading';
import Carousel from '../../ui/carousel';
import { Link } from 'react-router-dom';

export default function Door(props) {
  // useStoreDispatch({ type: 'setDoor', payload: props.match.params.door});
  const state = {
    name: props.match.params.door,
    loaded: false,
    door: null,
    items: []
  };
  state.door = useStoreState(state =>
    state.doors.getDoor(props.match.params.door)
  );
  state.loaded = useStoreState(state => state.doors.loaded);
  return state.loaded ? (
    <Fragment>
      <div className="twoColumn">
        <div className="card-panel">
          <Link to='../doors' className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.door.title}</h2>
          <ul>
            {state.door.versions.map(version => (
              <li key={uuid.v4()}>
                <Link to={'../materials/' + version.types.material.toLowerCase().replace(' ', '_')} >{version.title}: {version.types.material}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-panel">
          <Carousel images={state.door.images.all} key="carousel" />
        </div>
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}
