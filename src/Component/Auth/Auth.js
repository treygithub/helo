import React, {Component} from 'react'

class Auth extends Component{
constructor(){
    super();
    this.state={
        userName:'',
        password:''
    }
}
handleChange(e){
    // console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
}

    render(){
    return ( 
    <div>
        <input type="text" 
        placeholder="User Name"
        onChange={ e => this.handleChange(e) }
        >
        </input>

        <input type="password" 
        placeholder="Password"
        onChange={ e => this.handleChange(e) }
        >
        </input>

        <button type="submit">Login</button>
        <button type="submit">Register</button>

    </div> 
);
}
}
 
export default Auth;