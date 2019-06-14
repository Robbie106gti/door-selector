import React from 'react';

export default function Header(props) {
  const { title } = props;
  
    return (
      <header>
        <nav>
          <div className="nav-wrapper brown darken-3">
            <div className="whiteLine" />
            <a href="./" className="brand-logo">
              <img
                className="imageLogo"
                src="./assets/logos/logoNCs.png"
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
