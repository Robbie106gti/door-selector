import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright Nickels Cabinets
            <a
              className="grey-text text-lighten-4 right"
              href="https://webquoin.com/catalog/build/"
            >
              Start Catalog
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
