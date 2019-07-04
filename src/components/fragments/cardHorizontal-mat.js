import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardHorizontalMat = ({ card }) => {
  const params = card.props.location.search;
  const cornerstone = card.mat.lines.cornerstone ? 'Cornerstone' : '';
  const lighthouse = card.mat.lines.lighthouse ? 'Lighthouse, ' : '';
  const custom = card.mat.lines.custom ? 'Custom, ' : '';
  let link = '/materials/';
  switch (card.mat.category) {
    case 'Stain':
      link = '/stains/';
      break;
    case 'Premium Stain':
      link = '/stains/';
      break;
    case 'materials':
      link = '/materials/';
      break;
    case 'edges':
      link = '/edges/';
      break;
    default:
      link = '/materials/';
  }

  return (
    <Fragment>
      <div className="card horizontal">
        <div className="card-image">
          <Link to={link + card.mat.uid + params}>
            <img src={card.mat.image} alt={card.mat.title} />
          </Link>
        </div>
        <div className="card-stacked">
          <span className="card-title">{card.mat.title}</span>
          <div className="card-content">
            <ul className="tomanyOptions">
              {custom}
              {lighthouse}
              {cornerstone}
            </ul>
          </div>
          <div className="card-action">
            <Link to={link + card.mat.uid + params}>{card.mat.title}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardHorizontalMat;
