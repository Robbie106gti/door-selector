import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';
import Loading from '../../fragments/loading';

const Stains = () => {
  const stains = useStoreState(state => state.stains.getStains());

  return stains ? (
    <Fragment>
    <div className="row">
      <div className="card-panel">
        <Link to='../materials' className="right"><span>{'<= to Materials'}</span></Link>
          <h2>Color options</h2>
      </div>
    </div>
      <div className="row grid">
        {stains.map(st => (<CardHorizontalMat card={st} key={st.title} />))}
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Stains;
