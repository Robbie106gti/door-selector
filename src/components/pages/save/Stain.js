import React from 'react';
import { useStoreState } from 'easy-peasy';

const Stain = ({ params }) => {
  const state = useStoreState(store => store.stains.items[params.stain.toLowerCase()]);
  return state ? (
    <div className="card">
      <div className="card-image">
        <img src={state.image} alt={state.title} />
      </div>
      <div className="card-content">
        <span className="card-title">{state.title} ({state.category})</span>
        <p></p>
      </div>
      <div className="card-action">
        <a href="#"><i className="material-icons">move_to_inbox</i> Save Stain</a>
        <a href="#"><i className="material-icons">send</i> Share Stain</a>
      </div>
    </div>
  ) : (null);
}

export default Stain