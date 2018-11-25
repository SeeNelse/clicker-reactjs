import React, { Component } from 'react';
import LoginPage from './containers/loginPage';
import MapPage from './containers/mapPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ LoginPage } />
          <Route path="/map" component={ MapPage } />
        </div>
      </Router>
    );
  }
}

export default App;
