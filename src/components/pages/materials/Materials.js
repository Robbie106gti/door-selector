import React, { Fragment}from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontalMat from '../../fragments/cardHorizontal-mat';

const Materials = () => {
    let materials = useStoreState(state => state.materials.bySection);
    materials = Object.values(materials)

  return (
    <Fragment>
    <div className="row grid">
        { materials.map(mat => (<CardHorizontalMat card={mat} key={mat.title}/>))}
      </div>
    </Fragment>
  )
}

export default Materials;
