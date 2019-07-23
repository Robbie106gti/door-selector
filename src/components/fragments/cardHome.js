import React from 'react';
import { Link } from 'react-router-dom';

function CardHome(card) {
  card = card.card;
  let link = '/steps/' + card.link;
  if (card.props && card.props.match.params.mat) {
    link = '/steps/' + card.props.match.params.mat + '/' + card.link + '/doors';
  }

  return (
    <Link to={link} className="card of-hidden hoverable pointer">
      <div className="card-image center-align">
        <img src={card.image} alt={card.title} className="responsive-img" />
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{card.title}</span>
      </div>
    </Link>
  )
}

export default CardHome
