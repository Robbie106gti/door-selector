import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import model from './model';
import { StoreProvider, createStore } from 'easy-peasy';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

import About from './components/pages/About';
import Silly from './components/pages/Silly';
import Notfound from './components/pages/Notfound';
import Doors from './components/pages/door/Doors';
import Door from './components/pages/door/Door';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const store = createStore(model);
store.dispatch({
  type: 'initStore'
});
class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <Header title="Door selector" />
        <div className="row">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Doors} />
              <Route exact path="/doors" component={Doors} />
              <Route exact path="/doors/:door" component={Door} />
              <Route exact path="/materials" component={Doors} />
              <Route exact path="/materials/:material" component={Door} />
              <Route exact path="/about" component={About} />
              <Route exact path="/silly" component={Silly} />
              <Route exact path="/404" component={Notfound} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </StoreProvider>
    );
  }
}

export default App;
