import React, { Fragment }from 'react';
import { useStoreState } from 'easy-peasy';
import uuid from 'uuid';
import Loading from '../../fragments/loading';
import Subs from './Subs';

export default function Material(props) {
    const state = {
      name: props.match.params.material,
      loaded: false,
      section: null,
      items: []
    };
    state.section = useStoreState(state =>
      state.materials.getSection(props.match.params.material)
    );
    state.loaded = useStoreState(state => state.materials.loaded);
    return state.loaded ? (
      <Fragment>
      <div className="col s6">
        <div className="card-panel">
          <h2>{state.section.title}</h2>
        </div>
      </div> 
    <div className="col s6">
        { state.section.sub_materials.length === 0 ? <Subs subs={state.section.sub} key='Subset' /> : null }
    </div>    
      </Fragment>
  ) : (
    <Fragment>
      <Loading />
    </Fragment>
  );
}
