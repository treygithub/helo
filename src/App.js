import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Auth from './Component/Auth/Auth';
import Form from './Component/Form/Form';
import Nav from './Component/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Nav/>
      </div>
    );
  }
}

export default App;
