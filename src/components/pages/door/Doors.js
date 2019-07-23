import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontal from '../../fragments/cardHorizontal';
import Breadcrums from '../../fragments/breadcrums';
import Loading from '../../fragments/loading';

export default function Doors(props) {
  const doors = useStoreState(state => state.doors.getDoorFilterProps(props.match.params));

  return doors.length ? (
    <div className="step-wrapper">
      <Breadcrums crums={props} />
      <div className="row grid">
        {doors.map(card => (
          <CardHorizontal card={{ door: card, props, page: 'filtered' }} key={card.uid} />
        ))}
      </div>
    </div>
  ) : <Fragment>
      <Loading />
    </Fragment>;
}
