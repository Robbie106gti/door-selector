import React from 'react';
import { useStoreState } from 'easy-peasy';

const Door = ({ params }) => {
  const door = useStoreState(store => store.doors.items[params.door])
  const style = useStoreState(store => store.uiux.dstyleChoice[params.dstyle])
  return (
    <div className="card">
      <div className="card-image">
        <img src={door.images.mainImage} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title">{params.door} ({style.title})</span>
        <p></p>
      </div>
      <div className="card-action">
        <a href="#"><i className="material-icons">move_to_inbox</i> Save Door</a>
        <a href="#"><i className="material-icons">send</i> Share Door</a>
      </div>
    </div>
  );
}

export default Door