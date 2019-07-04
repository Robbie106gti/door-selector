import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import CardHorizontal from '../../fragments/cardHorizontal';
import Loading from '../../fragments/loading';

export default function Doors(props) {
  const doors = useStoreState(state => state.doors.getDoorByMat(props.match.params.material));
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
  console.log(props, array)

  return array.length ? (
    <Fragment>
      <div className="row grid">
        {array.map(card => (
          <CardHorizontal card={{ door: card, props }} key={card.uid} />
        ))}
      </div>
    </Fragment>
  ) : <Fragment>
      <Loading />
    </Fragment>;
}
