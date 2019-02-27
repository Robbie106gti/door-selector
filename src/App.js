import React, { Component } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Body from './components/ui/Body';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
