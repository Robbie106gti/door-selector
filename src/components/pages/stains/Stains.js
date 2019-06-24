import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';
import Loading from '../../fragments/loading';

const Stains = (props) => {
  const params = props.location.search;
  const stains = useStoreState(state => state.stains.getStains());

  return stains ? (
    <Fragment>
      <div className="row">
        <div className="card-panel">
          <Link to={'../materials' + params} className="right"><span>{'<= to Materials'}</span></Link>
          <h2>Stain options</h2>
        </div>
      </div>
      <div className="row grid">
        {stains.map(stain => (<CardHorizontalMat card={{ mat: stain, props }} key={stain.title} />))}
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Stains;
