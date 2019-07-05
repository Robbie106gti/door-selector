import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardHorizontal = ({ card }) => {
  const params = card.props.location.search;
  const cornerstone = card.door.lines.cornerstone ? 'Cornerstone' : '';
  const lighthouse = card.door.lines.lighthouse ? 'Lighthouse, ' : '';
  const custom = card.door.lines.custom ? 'Custom, ' : '';
  const link = card.page === 'allDoors' ? '/door/' : './';
  console.log(card)

  return (
    <Fragment>
      <div className="card horizontal">
        <div className="card-image">
          <Link to={link + card.door.uid + params} ><img src={card.door.images.mainImage} alt={card.door.title} /></Link>
        </div>
        <div className="card-stacked">
          <span className="card-title">{card.door.title}</span>
          <div className="card-content">
            <ul className="tomanyOptions">
              {card.door.types.aka.map(name => (<li key={name}>{name}</li>))}
              <li>{card.door.types.material}</li>
              <li>{card.door.edges.options.map(edge => (<span key={edge}>{edge}, </span>))}</li>
              {custom}
              {lighthouse}
              {cornerstone}
            </ul>
          </div>
          <div className="card-action">
            <Link to={link + card.door.uid + params} >{card.door.uid}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardHorizontal;