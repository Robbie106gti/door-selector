import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <Fragment>
      <div className="card of-hidden">
        {card.link ?
          <div className="card-image">
            <Link to={card.link}>
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