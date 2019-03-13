import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Body from './components/ui/Body';

import About from './components/pages/About';
import Silly from './components/pages/Silly';
import Notfound from './components/pages/Notfound';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header title="Door selector" />
            <div class="row">
              <Switch>
                <Route exact path="/" component={Body} />
                <Route exact path="/404" component={Notfound} />
                <Route exact path="/about" component={About} />
                <Route exact path="/silly" component={Silly} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
