import React, {Component} from 'react'
import axios from 'axios';


class Auth extends Component{
constructor(){
    super();
    this.state={
        userName:'',
        password:''
    }
}
handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
}

postNewUser = () => {
    //  e.preventDefault()
    let {userName, password} = this.state
    axios.post("api/postAllTheThings", {userName, password}).then(() => console.log('.then post res')).catch(err => console.log(err))
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
        <button onClick={()=>this.postNewUser()} type="submit">Register</button>

    </div> 
);
}
}
 
export default Auth;