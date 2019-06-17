import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardHorizontalMat = ({card}) => {
  const cornerstone = card.lines.cornerstone ? 'Cornerstone' : '';
  const lighthouse = card.lines.lighthouse ? 'Lighthouse, ' : '';
  const custom = card.lines.custom ? 'Custom, ' : '';
  return (
    <Fragment>
      <div className="card horizontal">
        <div className="card-image">
        <Link to={'/materials/'+card.uid} ><img src={ card.image } alt={ card.title }/></Link>
        </div>
        <div className="card-stacked">
          <span className="card-title">{card.title}</span>
            <div className="card-content">
                <ul className="tomanyOptions">
                  {custom}
                  {lighthouse}
                  {cornerstone}
                </ul>
            </div>
          <div className="card-action">
            <Link to={'/materials/'+card.uid} >{card.uid}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardHorizontalMat;