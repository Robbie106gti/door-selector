import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';
import Loading from '../../fragments/loading';

const Materials = () => {
  const loaded = useStoreState(state => state.materials.loaded);
  let materials = useStoreState(state => state.materials.bySection);
  materials = Object.values(materials)

  return loaded ? (
    <Fragment>
      <div className="row grid">
        {materials.map(mat => (<CardHorizontalMat card={mat} key={mat.title} />))}
      </div>
    </Fragment>
  ) : (
      <Fragment>
        <Loading />
      </Fragment>
    );
}

export default Materials;
