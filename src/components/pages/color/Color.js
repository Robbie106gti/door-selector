import React, { Fragment } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Loading from '../../fragments/loading';
import { Link } from 'react-router-dom';

export default function Color(props) {
  const params = props.location.search;
  const color = props.match.params.color;
  const mat = props.match.params.mat;
  const state = {
    name: props.match.params.color,
    type: props.match.params.mat,
    link: null,
    loaded: false,
    item: null
  };
  // console.log({ color, mat, params, state })
  state.item = useStoreState(state => state.getColor({ color, mat }));
  useStoreActions(state => state.clickedColor({ color, mat }));
  switch (mat) {
    case 'engineered':
      state.link = '../../materials/' + mat;
      break;
    case 'melamine':
      state.link = '../../materials/' + mat;
      break;
    case 'euro_materials':
      state.link = '../../materials/' + mat;
      break;
    case 'gloss':
      state.link = '../../materials/' + mat;
      break;
    default:
      state.link = '../../colors';
      break;
  }

  return state.item ? (
    <Fragment>
      <div className="twoColumn">
        <div className="card-panel">
          <Link to={state.link + params} className="right">
            <span>{'<= Back'}</span>
          </Link>
          <h2>{state.name}</h2>
        </div>
        <div className="card-panel">
          <img
            src={state.item.image}
            alt={state.item.title}
            className="responsive-img"
          />
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <Loading />
    </Fragment>
  );
}
