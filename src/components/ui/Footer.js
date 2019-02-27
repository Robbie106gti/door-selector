import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-copyright">
          <div class="container">
            © 2017 Copyright Nickels Cabinets
            <a
              class="grey-text text-lighten-4 right"
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
