import React, { Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import CardHorizontal from '../../fragments/cardHorizontal';
import Loading from '../../fragments/loading';

export default function Doors(props) {
  const doors = useStoreState(state => state.doors.getDoorFilterProps(props.match.params));
  useStoreActions(state => state.clickedMainMaterial(props.match.params.mat));
  useStoreActions(state => state.clickedMainDoorStyle(props.match.params.dstyle));

  return doors.length ? (
    <Fragment>
      <div className="row grid">
        {doors.map(card => (
          <CardHorizontal card={{ door: card, props, page: 'filtered' }} key={card.uid} />
        ))}
      </div>
    </Fragment>
  ) : <Fragment>
      <Loading />
    </Fragment>;
}
