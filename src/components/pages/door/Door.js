import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import uuid from 'uuid';
import Loading from '../../fragments/loading';
import Carousel from '../../ui/carousel';

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
          <div className="col s6">
            <div className="card-panel">
              <h2>{state.door.title}</h2>
              <ul>
                {state.door.versions.map(version => (
                  <li key={uuid.v4()}>
                    {version.title}: {version.types.material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col s6">
            <div className="card-panel">
            <Carousel images={state.door.images.all} key="carousel" />
            </div></div>
    </Fragment>
  ) : (
    <Fragment>
      <Loading />
    </Fragment>
  );
}
