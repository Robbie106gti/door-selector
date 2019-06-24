import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import SubSection from './SubSection';
import Loading from '../../fragments/loading';

const Colors = (props) => {
  const params = props.location.search;
  const state = {
    paints: null,
    stains: null,
    stainsLoaded: false,
    matsLoaded: false
  }
  state.paints = useStoreState(state => state.materials.getPaints());
  state.stains = useStoreState(state => state.stains.getStains());
  state.stainsLoaded = useStoreState(state => state.stains.loaded);
  state.matsLoaded = useStoreState(state => state.materials.loaded);

  return state.stainsLoaded && state.matsLoaded ? (
    <Fragment>
      <div className="row">
        <div className="card-panel">
          <Link to={'../materials' + params} className="right"><span>{'<= to Materials'}</span></Link>
          <h2>Color options</h2>
        </div>
      </div>
      <div className="twoColumn">
        <div className="card-panel">
          <h3>Paint colors</h3>
          <SubSection section={{ colors: state.paints, props, mat: 'painted' }} key='paints' />
        </div>
        <div className="card-panel">
          <h3>Stain colors</h3>
          <SubSection section={{ colors: state.stains, props, mat: 'stains' }} key='stains' />
        </div>
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Colors;
