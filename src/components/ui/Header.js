import React from 'react';

export default function Header(props) {
  const { title } = props;

  return (
    <header className="of-hidden">
      <nav>
        <div className="nav-wrapper brown darken-3">
          <div className="whiteLine" />
          <a href='./' className="brand-logo">
            <img
              className="imageLogo"
              src="/catalog/door-selector/assets/icons/logoNC.svg"
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
