import React from 'react';
import { useStoreState } from 'easy-peasy';

const Material = ({ params }) => {
  let mat = {};
  useStoreState(store => {
    let color = [];
    switch (params.mat) {
      case 'painted':
        color = Object.values(store.materials.bySection.painted.sub);
        break;
      case 'wood':
        color = Object.values(store.materials.bySection.wood.sub);
        break;
      default:
        color = [Object.values(store.materials.bySection.engineered.sub), Object.values(store.materials.bySection.melamine.sub), Object.values(store.materials.bySection.euro_material.sub), Object.values(store.materials.bySection.gloss.sub)];
    }
    return mat = color.length ? color.filter(col => col.title === params.color)[0] : {};
  })

  return (
    <div className="card">
      <div className="card-image">
        <img src={mat.image} alt={mat.title} />
      </div>
      <div className="card-content">
        <span className="card-title">{mat.title} ({mat.material})</span>
        <p></p>
      </div>
      <div className="card-action">
        <a href="#"><i className="material-icons">move_to_inbox</i> Save Color</a>
        <a href="#"><i className="material-icons">send</i> Share Color</a>
      </div>
    </div>
  );
}

export default Material