import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <li><Link className="white-text" to="/">Home</Link></li>
                <li><Link className="white-text" to="/about">About</Link></li>
                <li><Link className="white-text" to="/doors">Doors</Link></li>
                <li><Link className="white-text" to="/materials">Materials</Link></li>
                <li><Link className="white-text" to="/stains">Stains</Link></li>
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
