import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom';
import Carousel from '../../ui/carousel';
import Card from '../../fragments/card';

const DoorAndColors = (params) => {
    params = params.params;
    useStoreActions(store =>  store.clickedMainDoor(params));
    const state = useStoreState(store => store.getDoorMaterial(params));
    console.log(params, state)
  return (
    <div className="twoColumn">
      <div className="card-panel">
        <Link to={'./doors'} className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.door.title}</h2>
          <Carousel images={state.door.images.all} key="carousel" />
      </div>
      <div className="card-panel">
        <h2>Material Options/Colors</h2>
        <div className="colorGrid">
            {state.material.map(a => (<Card card={a} key={a.uid} />))}
        </div>

      </div>
    </div>
  )
}

export default DoorAndColors
