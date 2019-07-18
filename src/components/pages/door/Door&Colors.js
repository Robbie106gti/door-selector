import React from 'react'
import { useStoreState } from 'easy-peasy'
import Step3 from './Step3';

const DoorAndColors = (params) => {
  params = params.params;
  const state = {
    ready: false,
    door: null,
    material: null
  };
  useStoreState(store => {
    const dm = store.getDoorMaterial(params);
    if (dm) {
      state.door = dm.door;
      state.material = dm.material;
      state.ready = true;
    }
  })

  return state.ready === false ? (null) : (
    <Step3 props={{ state, params }} />
  )
}

export default DoorAndColors
