import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import routes from './route';
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.location.pathname !== "/" && <Nav />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);