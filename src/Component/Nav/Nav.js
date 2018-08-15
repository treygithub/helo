import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class Nav extends Component {
  


    render() { 
        
        return ( 
        
        <div>
           {this.props.location.pathname !== '/'&&<nav>NAVBAR</nav>} 
        </div>
     );
    }
}
 
export default withRouter(Nav);