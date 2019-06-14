import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardHorizontal = ({card}) => {
  return (
    <Fragment>
      <div class="card horizontal">
        <div class="card-image">
          <img src={ card.images.mainImage } alt={ card.title }/>
        </div>
        <div class="card-stacked">
          <span class="card-title">{card.title}</span>
            <div class="card-content">
                <ul>
                  {card.types.aka.map(name =>(<li>{name}</li>))}
                  <li>{card.types.material}</li>
                  <li>{card.edges.options.map(edge => (<span>{edge} ,</span>))}</li>
                </ul>
            </div>
          <div class="card-action">
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardHorizontal;