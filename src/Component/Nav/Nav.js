import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";

class Nav extends Component {
    constructor() {
        super();
        this.state = {
          user_id: 0,
          userName: "",
          profilePic:""
        };
      }
      componentDidMount = () => {
        axios.get(`/api/session`).then(res => {
          console.log(res)
          this.setState({ user_id: res.data.user_id, userName: res.data.username, profilePic: res.data.profilepic });
        });
      }
      handlelogout = () => {
        axios.post(`/api/auth/logout`).then(res => {
          this.setState({ user_id: "", userName: "" });
        });
      }

    render() { 
       console.log("nav props ", this.props)
        return ( 
        
        <div>
            <nav>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/post/:postid'><button>New Post</button></Link>
                <Link to='/'><button onClick={() => this.handlelogout()}>Logout</button></Link>
            </nav>
            <div>
              <h2 >Profile</h2>
                <h3>Welcome User:  {this.props.userName}</h3>
                <h3>{`User Id: ${this.props.user_id}`}</h3>
                <img src={this.props.profilePic} height="100" width="100" style={{borderRadius:'50%',boxShadow:"3px 3px 4px black"}} alt="user" />
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