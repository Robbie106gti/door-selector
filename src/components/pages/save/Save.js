import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import Door from './Door';
import Material from './Material';
import Stain from './Stain';

const Save = (props) => {
  const params = props.match.params;
  const ready = useStoreState(store => store.getDoorMatLoaded());
  return ready ? (
    <Fragment>
      <div className="grid">
        <Door params={params} />
        <Material params={params} />
        {params.stain ? (<Stain params={params} />) : (null)}
      </div>
      <div className="padding"></div>
      <div className="row">

        <div className="card">
          <div className="card-content">
            <span className="card-title">{params.door} - {params.dstyle} - {params.mat} - {params.color} {params.stain ? (' - ' + params.stain) : (null)}</span>
            <p></p>
          </div>
          <div className="card-action">
            <a href="#"><i className="material-icons">move_to_inbox</i> Save Setup</a>
            <a href="#"><i className="material-icons">send</i> Share Setup</a>
          </div>
        </div>

      </div>
    </Fragment>
  ) : (<Loading />);
}

export default Save