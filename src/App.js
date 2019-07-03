import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import model from './model';
import { StoreProvider, createStore } from 'easy-peasy';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Breadcrums from './components/fragments/breadcrums';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import Doors from './components/pages/door/Doors';
import Door from './components/pages/door/Door';
import Materials from './components/pages/materials/Materials';
import Material from './components/pages/materials/Material';
import Stains from './components/pages/stains/Stains';
import Stain from './components/pages/stains/Stain';
import Edges from './components/pages/edges/Edges';
import Edge from './components/pages/edges/Edge';
import Colors from './components/pages/color/Colors';
import Color from './components/pages/color/Color';

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
        <Breadcrums />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doors" component={Doors} />
            <Route exact path="/doors/:door" component={Door} />
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/materials/:material" component={Material} />
            <Route exact path="/stains" component={Stains} />
            <Route exact path="/stains/:stain" component={Stain} />
            <Route exact path="/edges" component={Edges} />
            <Route exact path="/edges/:edge" component={Edge} />
            <Route exact path="/colors" component={Colors} />
            <Route exact path="/colors/:mat/:color" component={Color} />
            <Route exact path="/about" component={About} />
            <Route exact path="/404" component={Notfound} />
          </Switch>
        </Router>
        <Footer />
      </StoreProvider>
    );
  }
}

export default App;
