import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardHorizontal = ({card}) => {
  const cornerstone = card.lines.cornerstone ? 'Cornerstone' : '';
  const lighthouse = card.lines.lighthouse ? 'Lighthouse, ' : '';
  const custom = card.lines.custom ? 'Custom, ' : '';

  return (
    <Fragment>
      <div className="card horizontal">
        <div className="card-image">
          <img src={ card.images.mainImage } alt={ card.title }/>
        </div>
        <div className="card-stacked">
          <span className="card-title">{card.title}</span>
            <div className="card-content">
                <ul>
                  {card.types.aka.map(name =>(<li>{name}</li>))}
                  <li>{card.types.material}</li>
                  <li>{card.edges.options.map(edge => (<span>{edge}, </span>))}</li>
                  {custom}
                  {lighthouse}
                  {cornerstone}
                </ul>
            </div>
          <div className="card-action">
            <Link to={'/door/'+card.uid}>{card.uid}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardHorizontal;