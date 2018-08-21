import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  

    render() { 
        console.log('props are here ',this.props)
        return ( 
        
        <div>
           { this.props.match.url == '/' ? null :  <nav>
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
const mapStateToProps = state => {
     return {username: state, profilepic: state}
};

export default connect( mapStateToProps, {} )(withRouter(Nav));

// export default withRouter(Nav);