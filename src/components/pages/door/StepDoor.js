
import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import DoorAndColors from './Door&Colors';

const StepDoor = (props) => {
    const ready = useStoreState(store => store.getDoorMatLoaded());
    return ready ? (
      <Fragment>
          <DoorAndColors params={props.match.params} />
      </Fragment>
    ) : (
        <Fragment>
          <Loading />
        </Fragment>
      );
}

export default StepDoor
