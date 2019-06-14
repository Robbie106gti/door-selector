import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Body extends Component {
  onBookmark = () => {
    console.log('Clicked');
  };

  render() {
    const { testTitle, array } = this.props;
    return (
      <div className="row">
        <div className="col s6 m4 l3">
          <div className="card-panel">
            <h4>{testTitle}</h4>
            <ul>
              {array.map(a => (
                <li key={a}>
                  {a}{' '}
                  <i className="material-icons" onClick={this.onBookmark}>
                    bookmark
                  </i>
                </li>
              ))}
            </ul>
            <Link to="/silly">Silly</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/doors">Doors</Link>
            <br />
            <Link to="/404">404</Link>
          </div>
        </div>
        <div className="col s6 m4 l3">
          <div className="card-panel teal" />
        </div>
        <div className="col s6 m4 l3">
          <div className="card-panel grey" />
        </div>
      </div>
    );
  }
}

Body.defaultProps = {
  testTitle: 'Body component',
  array: ['Test 1', 'Test 2']
};

Body.propTypes = {
  testTitle: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired
};
