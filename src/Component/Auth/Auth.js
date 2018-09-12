import React, {Component} from 'react'
import axios from 'axios';
// import { Redirect } from 'react-router'
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import {
    reducerID,
    reducerProfilePic,
    reducerUserName
  } from "../../ducks/reducer";

class Auth extends Component{
constructor(props){
    super(props);
    this.state= {
        userName: '',
        password: '',
        loggedIn: '',
        user_id:''
    }
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

postNewUser = () => {
    let {userName, password} = this.state
    axios.post('/api/registerNewUser', {userName, password})
    .then(res => {
        this.props.reducerID(res.data[0].user_id);
        this.props.reducerUserName(res.data[0].username);
        this.props.reducerProfilePic(res.data[0].profilePic);
      })
      .then(res => {
          this.props.history.push("/dashboard")
      })
    .catch(function (error) {
        console.log(error);
      });
};

login = () => {
    let {userName, password} = this.state
    axios.post('/api/loginCheck', {userName, password})
    .then(res => {
        this.props.reducerID(res.data[0].user_id);
        this.props.reducerUserName(res.data[0].username);
        this.props.reducerProfilePic(res.data[0].profilePic);
      })
      .then(res => {
          this.props.history.push("/dashboard")
      })
    .catch(function (error) {
        console.log(error);
      });
}

render(){
    console.log("state be here auth page", this.state)
return ( 
<div>

<input type="text"
name="userName"
placeholder="User Name"
onChange={ e => this.handleChange(e) }
>
</input>

<input type="password"
name="password"
placeholder="Password"
onChange={ e => this.handleChange(e) }
>
</input>

<button onClick={ this.login } type="submit">Login</button>
<button onClick={()=>this.postNewUser()} type="submit">Register</button>

</div> 
);
}
}

export default connect(null,
    { reducerID, reducerProfilePic, reducerUserName }
  )(Auth);