import React, {Component} from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'

class Auth extends Component{
constructor(){
    super();
    this.state= {
        data: [],
        userName: '',
        password: '',
        loggedIn: '',
        myredirect:false
    }
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

postNewUser(){
    let {userName, password} = this.state
    axios.post('http://localhost:4000/api/registerNewUser', {userName, password})
    .then(res => {
        this.setState({
          loggedIn: res.data, myredirect:true
        })
      })
    .catch(function (error) {
        console.log(error);
      });
}

login = () => {
    let {userName, password} = this.state
    axios.post('http://localhost:4000/api/loginCheck', {userName, password})
    .then(res => {
        this.setState({
          loggedIn: res.data[0].username, myredirect:true
        })
      })
    .catch(function (error) {
        console.log(error);
      });
}


render(){
    console.log(this.state)
if(this.state.myredirect){
   return <Redirect push to={"/dashboard"}/>
}
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


 
export default Auth;