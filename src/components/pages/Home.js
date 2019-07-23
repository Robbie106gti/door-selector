import React, { Fragment } from 'react';
import CardHome from '../fragments/cardHome';
import Breadcrums from '../fragments/breadcrums';
import { useStoreState } from 'easy-peasy'

export default function Home(props) {
  let array = [];
  const dstyleChoice = useStoreState(store => store.uiux.getDstyle());
  const matChoice = useStoreState(store => store.uiux.getMats());
  props.match.params.mat ? dstyleChoice.forEach(route => route.mats.includes(props.match.params.mat) ? array.push({ ...route, props }) : null) : array = matChoice;

  return (<Fragment>
    <div className="step-wrapper">
      <Breadcrums crums={props} />
      <div className="gridHome">
        {array.map(route => (
          <CardHome card={route} key={route.title} />
        ))
        }
      </div>
    </div>
  </Fragment>
  );
}
