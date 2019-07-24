import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../../ui/carousel';
import CardStep from '../../fragments/cardstep';

const Step3 = (props) => {
  props = props.props;
  const state = props.state;
  return (
    <Fragment>
      <div className="twoColumn">
        <div className="col s12 m6 l4 card-panel card-padding">
          <Link to={'./doors'} className="right"><span>{'<= Back'}</span></Link>
          <h2>{state.door.title}</h2>
          <Carousel images={state.door.images.all} key="carousel" />
        </div>
        <div className="col s12 m6 l8 card-panel card-padding">
          <h2>Material Options/Colors</h2>
          <div className="colorGrid">
            {state.material.map(a => (<CardStep card={{ ...a, params: props.params }} key={a.uid} />))}
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Step3