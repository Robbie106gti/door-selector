import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
  console.log(props);
  // useStoreActions(state => state.step1Effect(props.match.params.mat));

  const selection = useStoreState(state => state.user.selection);
  const steps = selection.steps ? Object.values(selection.steps) : [];

  return selection.step === 0 ? (null) : (<nav>
    <div className="nav-wrapper">
      <div className="col s12">
        {steps.map(sel => (<Link to={sel.link} className="breadcrumb" key={sel.title}>{sel.title}</Link>))}
      </div>
    </div>
  </nav>);
}

export default Breadcrums;