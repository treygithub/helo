import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom';
class Nav extends Component {
  

    render() { 
        console.log(this.props.match.path)
        return ( 
        
        <div>
           { this.props.location.pathname === '/' ? null :  <nav>
           <Link to='/dashboard'><button>Home</button></Link>
           <Link to='/new'><button>New Post</button></Link>
           <Link to='/'><button>Logout</button></Link>
            </nav> } 
           {/* { this.props.location.pathname !== '/' && <nav>NAVBAR</nav> : null }  */}
           {/* { this.props.match.params !== "/" ? <nav>NAVBAR</nav> : null }  */}
           
        </div>
     );
    }
}
 
export default withRouter(Nav);