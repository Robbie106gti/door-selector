import React, { Fragment } from 'react';

const Loading = () => {
  return (
    <Fragment>
          <div id="loading" className="modal">
            <div className="preloader-wrapper realbig active">
            <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>

            <div className="spinner-layer spinner-red">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>

            <div className="spinner-layer spinner-yellow">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>

            <div className="spinner-layer spinner-green">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
            </div>
            </div>
  </div>
    </Fragment>
  );
}

export default Loading;