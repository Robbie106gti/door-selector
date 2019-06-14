import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Tabs = ({tabs}) => {
  return (
    <Fragment>
    <ul id="tabs-swipe-demo" class="tabs">
        <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
        <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
        <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
    </ul>
    <div id="test-swipe-1" class="col s12 blue">Test 1</div>
    <div id="test-swipe-2" class="col s12 red">Test 2</div>
    <div id="test-swipe-3" class="col s12 green">Test 3</div>
    </Fragment>
  );
}

export default Tabs;