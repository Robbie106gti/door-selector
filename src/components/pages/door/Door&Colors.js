import React from 'react'
import { useStoreState } from 'easy-peasy'
import Step3 from './Step3';

const DoorAndColors = (params) => {
    params = params.params;
    const state = useStoreState(store => store.getDoorMaterial(params));
    console.log(state)
    
  return state === false  ? (null) : (
    <Step3 props={{state, params}} />
  )
}

export default DoorAndColors
