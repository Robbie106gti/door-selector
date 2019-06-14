import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-image">
          <img src={ card.images.mainImage } alt={ card.title }/>
          <span className="card-title">{card.title}</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;