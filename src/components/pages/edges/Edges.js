import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';
import Loading from '../../fragments/loading';

const Edges = (props) => {
  const params = props.location.search;
  const edges = useStoreState(state => state.edges.getEdges());

  return edges ? (
    <Fragment>
      <div className="row">
        <div className="card-panel">
          <Link to={'doors' + params} className="right"><span>{'<= to Doors'}</span></Link>
          <h2>Edge options</h2>
        </div>
      </div>
      <div className="row grid">
        {edges.map(mat => (<CardHorizontalMat card={{ mat, props }} key={mat.title} />))}
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Edges;
