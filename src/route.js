import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Auth from './Component/Auth/Auth';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

export default  (
      
    <Switch>
      <Route exact path='/' component={ Auth }/>
      <Route path='/Dashboard' component={ Dashboard }/>
      <Route path='/post/:postid' component={ Post }/>
      <Route path='/new' component={ Form }/>
    </Switch>
  
)