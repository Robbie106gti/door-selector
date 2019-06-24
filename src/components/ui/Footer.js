import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer brown darken-3 no-print">
        <div className="container">
          <div className="row">
            <div className="col l6 s4">
            </div>
            <div className="col l3 s4">
              <h5 className="white-text">Site map</h5>
              <ul>
                <li><a className="white-text" href="/catalog/door-selector/">Home</a></li>
                <li><a className="white-text" href="/catalog/door-selector/about">About</a></li>
                <li><a className="white-text" href="/catalog/door-selector/doors">Doors</a></li>
                <li><a className="white-text" href="/catalog/door-selector/materials">Materials</a></li>
                <li><a className="white-text" href="/catalog/door-selector/stains">Stains</a></li>
              </ul>
            </div>
            <div className="col l3 s4">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="http://twitter.com/nickelscabinets">Twitter</a></li>
                <li><a className="white-text" href="http://facebook.com/nickelscabinets">Facebook</a></li>
                <li><a className="white-text" href="https://www.instagram.com/nickelscabinets/">Instagram</a></li>
                <li><a className="white-text" href="http://pinterest.com/nickelscabinets">Pinterest</a></li>
                <li><a className="white-text" href="http://www.nickelscabinets.com">Nickels Cabinets</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright"><span>© 2019 Copyright Nickels Cabinets</span></div>
      </footer>
    );
  }
}
