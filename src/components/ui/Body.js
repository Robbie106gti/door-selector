import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Body extends Component {
  onBookmark() {
    console.log('Clicked');
  }
  render() {
    const { testTitle, array } = this.props;
    return (
      <div>
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
