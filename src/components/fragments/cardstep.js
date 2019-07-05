import React from 'react';
import { Link } from 'react-router-dom';

const CardStep = ({ card }) => {
    console.log(card)
  let link = '/steps/' + card.params.mat + '/' + card.params.dstyle + '/' + card.params.door;
  if (card.mat_name === 'WOOD' && !card.link) {
    link += '/'+card.item_name;
  }

  return (
      <div className="card of-hidden">
          <div className="card-image">
            <Link to={link}>
              <img src={card.image} alt={card.title} />
              <span className="card-title">{card.title}</span>
            </Link>
          </div>
      </div>
  );
}

export default CardStep;