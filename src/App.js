import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import model from './model';
import { StoreProvider, createStore } from 'easy-peasy';

import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';

import Doors from './components/pages/door/Doors';
import AllDoors from './components/pages/door/AllDoors';
import Door from './components/pages/door/Door';
import Step3Door from './components/pages/door/Step3Door';
import Step4Door from './components/pages/door/Step4Door';
import Materials from './components/pages/materials/Materials';
import Material from './components/pages/materials/Material';
import Stains from './components/pages/stains/Stains';
import Stain from './components/pages/stains/Stain';
import Colors from './components/pages/color/Colors';
import Color from './components/pages/color/Color';
import Edges from './components/pages/edges/Edges';
import Edge from './components/pages/edges/Edge';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Toasts from './components/ui/toasts';

const store = createStore(model);
store.dispatch({
  type: 'initStore'
});
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <StoreProvider store={store}>
          <Header title="Door selector" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/steps/:mat" component={Home} />
              <Route exact path="/steps/:mat/:dstyle/doors" component={Doors} />
              <Route exact path="/steps/:mat/:dstyle/:door" component={Step3Door} />
              <Route exact path="/steps/:mat/:dstyle/:door/:color" component={Step4Door} />
              <Route exact path="/steps/:mat/:dstyle/:door/:color/:stain" component={Step4Door} />
              <Route exact path="/doors" component={AllDoors} />
              <Route exact path="/doors/:material" component={Doors} />
              <Route exact path="/door/:door" component={Door} />
              <Route exact path="/materials" component={Materials} />
              <Route exact path="/materials/:material" component={Material} />
              <Route exact path="/stains" component={Stains} />
              <Route exact path="/stains/:stain" component={Stain} />
              <Route exact path="/colors" component={Colors} />
              <Route exact path="/colors/:mat/:color" component={Color} />
              <Route exact path="/edges" component={Edges} />
              <Route exact path="/edges/:edge" component={Edge} />
              <Route exact path="/about" component={About} />
              <Route exact path="/404" component={Notfound} />
              <Route component={Notfound} />
            </Switch>
          </div>
          <Footer />
          <Toasts />
        </StoreProvider>
      </Router>
    );
  }
}

export default App;
