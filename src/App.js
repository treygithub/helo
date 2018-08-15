import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import routes from './route'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
