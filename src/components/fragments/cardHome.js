import React from 'react';
import { Link } from 'react-router-dom';

function CardHome(card) {
    card = card.card;
    let link = '/steps/' + card.link;
    if (card.props && card.props.match.params.mat) {
      link = '/steps/' + card.props.match.params.mat + '/' + card.link + '/doors';
    } 
    return (
      <div className="card of-hidden">
          <div className="card-image">
            <Link to={link} >
              <img src={card.image} alt={card.title} />
              <span className="card-title">{card.title}</span>
            </Link>
          </div>            
        </div>
    )
}

export default CardHome
