import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
  return (
    <Fragment>
      <div class="card">
        <div class="card-image">
          <img src={ card.images.mainImage } alt={ card.title }/>
          <span class="card-title">{card.title}</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;