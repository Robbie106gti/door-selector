import React from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import DoorStain from './DoorStain';

const Step4Door = (props) => {
    const ready = useStoreState(store => store.getDoorMatLoaded()) || false;
    return ready ? (
        <DoorStain params={props.match.params} />
    ) : (<Loading />);
}

export default Step4Door