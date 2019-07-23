import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import Breadcrums from '../../fragments/breadcrums';
import DoorStain from './DoorStain';

const Step4Door = (props) => {
    const ready = useStoreState(store => store.getDoorMatLoaded()) || false;
    return ready ? (
        <div className="step-wrapper">
            <Breadcrums crums={props} />
            <DoorStain params={props.match.params} />
        </div>
    ) : (<Loading />);
}

export default Step4Door