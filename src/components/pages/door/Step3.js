import React from 'react'
import { useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom';
import Carousel from '../../ui/carousel';
import CardStep from '../../fragments/cardstep';

const Step3 = (props) => {
    props = props.props;
    console.log(props)
    const state = props.state;
    useStoreActions(store =>  store.clickedMainDoor(props.params));
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
            {state.material.map(a => (<CardStep card={{...a, params: props.params}} key={a.uid} />))}
        </div>

      </div>
    </div>
  )
}

export default Step3