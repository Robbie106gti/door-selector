import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontal from '../../fragments/cardHorizontal';
import Loading from '../../fragments/loading';

export default function Doors() {
  const loaded = useStoreState(state => state.doors.loaded);
  const doors = useStoreState(state => state.doors.items);
  let array = Object.values(doors);
  array = array.sort((a, b) => compare(a, b));
  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  return loaded ? (
    <Fragment>
      <div className="row grid">
        {array.map(card => (
          <CardHorizontal card={card} key={card.uid} />
        ))}
      </div>
    </Fragment>
  ) : <Fragment>
      <Loading />
    </Fragment>;
}
