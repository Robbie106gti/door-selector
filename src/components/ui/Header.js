import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <header>
        <nav>
          <div className="nav-wrapper brown darken-3">
            <div className="whiteLine" />
            <a href="./" className="brand-logo">
              <img
                className="imageLogo"
                src="/assets/logos/logoNCs.png"
                alt="Nickels Cabinets"
              />
              <span className="headingLogo">
                <i className="material-icons">book</i> {title}
              </span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
