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
        <Link to={'/doors/'+card.uid} ><img src={ card.images.mainImage } alt={ card.title }/></Link>
        </div>
        <div className="card-stacked">
          <span className="card-title">{card.title}</span>
            <div className="card-content">
                <ul className="tomanyOptions">
                  {card.types.aka.map(name =>(<li key={name}>{name}</li>))}
                  <li>{card.types.material}</li>
                  <li>{card.edges.options.map(edge => (<span key={edge}>{edge}, </span>))}</li>
                  {custom}
                  {lighthouse}
                  {cornerstone}
                </ul>
            </div>
          <div className="card-action">
            <Link to={'/doors/'+card.uid} >{card.uid}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardHorizontal;