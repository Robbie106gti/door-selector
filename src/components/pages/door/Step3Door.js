
import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';
import Loading from '../../fragments/loading';
import Breadcrums from '../../fragments/breadcrums';
import DoorAndColors from './Door&Colors';

const StepDoor = (props) => {
    const ready = useStoreState(store => store.getDoorMatLoaded());
    return ready ? (
        <Fragment>
            <Breadcrums crums={props} />
            <DoorAndColors params={props.match.params} />
        </Fragment>
    ) : (
            <Loading />
        );
}

export default StepDoor
