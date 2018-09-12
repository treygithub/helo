import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from "axios";

class Nav extends Component {
    constructor() {
        super();
        this.state = {
          userId: "",
          userName: "",
          id:"",
          profilePic:""
        };
      }
    
    // componentDidMount() {
    //     axios.get("/api/getSession").then(res => {
    //       console.log(res);
    //       this.setState({ id: res.data.id, userName: res.data.userName });
    //     });
    //   }
  

    render() { 
        console.log('props are here nav page ',this.props)
        console.log('state are here nav page ',this.state)
        return ( 
        
        <div>
            <nav>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </nav>
            <div>
                <h3>{this.state.userName}</h3>
                <h3>{`ID No. ${this.props.id}`}</h3>
                <img src={this.props.profilePic} alt="user" />
            </div>
        </div>
     );
    }
}

const mapStateToProps = state => ({
    userName: state.userName,
    id: state.id,
    profilePic: state.profilePic
  });
  
  export default connect(mapStateToProps)(Nav);