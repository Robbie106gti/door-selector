import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  let link = card.link ? card.link : '';
  if (card.mat_name === 'WOOD' && !card.link) {
    link = '../colors';
  }

  if (card.material && ['engineered', 'euro materials', 'melamine', 'gloss', 'painted'].includes(card.material.toLowerCase())) {
    link = '../colors/' + card.material.toLowerCase().replace(' ', '_') + '/' + card.title;
  }

  return (
    <Fragment>
      <div className="card of-hidden">
        {link ?
          <div className="card-image">
            <Link to={link}>
              <img src={card.image} alt={card.title} />
              <span className="card-title">{card.title}</span>
            </Link>
          </div> :
          <div className="card-image">
            <img src={card.image} alt={card.title} />
            <span className="card-title">{card.title}</span>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default Card;