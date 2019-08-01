import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom';
import Carousel from '../../ui/carousel';
import CardStep from '../../fragments/cardstep';

const DoorStain = (params) => {
  params = params.params;
  // useStoreActions(store =>  store.clickedMainDoor(params));
  const state = useStoreState(store => store.getDoorWoodStains(params));
   console.log(state)
  return state ? (
    <div className="twoColumn">
      <div className="card-panel">
        <Link to={'./doors'} className="right"><span>{'<= Back'}</span></Link>
        <h2>{state.door.title}</h2>
        <div className="card-content"><img src={state.door.images.mainImage} alt={state.door.title} className="responsive-img" /></div>
        <h2>{state.material.title}</h2>
        <div className="card-content"><img src={state.material.image} alt={state.material.title} className="responsive-img" /></div>
      </div>
      <div className="card-panel">
        <h2>Stains</h2>
        <div className="colorGrid">
          {state.stains.map(a => (<CardStep card={{ ...a, params }} key={a.uid} />))}
        </div>
      </div>
    </div>) : (null);
}

export default DoorStain