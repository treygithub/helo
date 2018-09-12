import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from "axios";

class Nav extends Component {

    render() { 
        console.log('props are here nav page ',this.props)
        
        return ( 
        
        <div>
            <nav>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </nav>
            <div>
                <h3>{this.props.userName}</h3>
                <h3>{`ID No. ${this.props.user_id}`}</h3>
                <img src={this.props.profilePic} alt="user" />
            </div>
        </div>
     );
    }
}

const mapStateToProps = state => ({
    userName: state.userName,
    user_id: state.user_id,
    profilePic: state.profilePic
  });
  
  export default connect(mapStateToProps)(Nav);