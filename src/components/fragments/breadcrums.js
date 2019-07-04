import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';

const Breadcrums = () => {
  const selection = useStoreState(state => state.user.selection);

  return selection.length !== 0 ? (<nav>
    <div className="nav-wrapper">
      <div className="col s12">
        {selection.map(sel => (<Link to={sel.link} className="breadcrumb" key={sel.title}>{sel.title}</Link>))}
      </div>
    </div>
  </nav>) : (null);
}

export default Breadcrums;