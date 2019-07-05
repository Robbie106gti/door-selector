
import React from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import DoorAndColors from './Door&Colors';

const StepDoor = (props) => {
    const ready = useStoreState(store => store.getDoorMatLoaded());
    return ready ? (
        <DoorAndColors params={props.match.params} />
    ) : (
          <Loading />
      );
}

export default StepDoor
