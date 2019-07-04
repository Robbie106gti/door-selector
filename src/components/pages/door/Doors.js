import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontal from '../../fragments/cardHorizontal';
import Loading from '../../fragments/loading';

export default function Doors(props) {
  const doors = useStoreState(state => state.doors.getDoorFilterProps(props.match.params));

  return doors.length ? (
    <Fragment>
      <div className="row grid">
        {doors.map(card => (
          <CardHorizontal card={{ door: card, props }} key={card.uid} />
        ))}
      </div>
    </Fragment>
  ) : <Fragment>
      <Loading />
    </Fragment>;
}
