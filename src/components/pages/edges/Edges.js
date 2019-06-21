import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';
import Loading from '../../fragments/loading';

const Edges = () => {
  const edges = useStoreState(state => state.edges.getEdges());

  return edges ? (
    <Fragment>
    <div className="row">
      <div className="card-panel">
        <Link to='doors' className="right"><span>{'<= to Doors'}</span></Link>
          <h2>Color options</h2>
      </div>
    </div>
      <div className="row grid">
        {edges.map(mat => (<CardHorizontalMat card={mat} key={mat.title} />))}
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Edges;
