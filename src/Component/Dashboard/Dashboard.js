import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      post: "",
      title: "",
      allPost:[]
    };
  }
  componentDidMount = () => {
    this.getAllPosts();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

postNewPost = (e) => {
  e.preventDefault();
  let {post, title} = this.state
//  console.log("this is the post", {post, title})
  axios.post(`/api/userPost`, { post, title }).then(res => {
    this.setState({
      allPost: res.data
    })
  })
  .catch(err => console.log(err));
}

  getAllPosts = () => {
    axios.get("/api/getPostUser").then(res => {
      this.setState({ allPost: res.data });
    });
  }

  buttonDelete = (id) => {
    axios
      .delete(`/api/delete/?id=${id}`)
      .then(res => {
        this.setState({ allPost: res.data });
      })
      .then(()=>this.getAllPosts())
      .catch(err => console.log(err));
  }

  handleSendEdit = (postid) => {
   
    let {post} = this.state
    axios
      .put(`/api/updatePost/${postid}`, { post })
      .then(res => {
        this.setState({ AllPost: res.data });
      })
      .then(()=>this.getAllPosts())
      .catch(err => console.log(err));
  }

  render() {
console.log(this.state)
     let {allPost} = this.state
    let loop = allPost.map((e,i)  => {
      return(
        <div key={i}>
            <div>
              <h4>Post ID: {e.postid} || user ID: {e.user_id}</h4>
              <h5>Title of Post</h5>
              <h6>{e.title}</h6>         
              <h5>Body of post</h5>
              <h6>{e.post}</h6>
              <input type="text" name="post" onChange={(e)=>this.handleChange(e)} />
              <button onClick={()=>this.handleSendEdit(e.postid)}>Edit the body</button>
              <br/>
              <br/>
              <Link to={`/Post/${e.postid}`}><button>MATCH PARAMS ROUTING</button></Link>
              <br/>
              <button onClick={()=>this.buttonDelete(e.postid)}>Delete this Crap With a query</button>
            </div>
            <hr/>
        </div>
      )
    })
    return (
      <div>
        <hr/>
        <h1>Make a new post</h1>
        <h3>Title of post</h3>
        <input type="text" name="title" value={this.state.title}
        onChange={(e)=>this.handleChange(e)}
        />
        <h3>Post Body</h3>
        <input type="text" name="post" value={this.state.post}
        onChange={(e)=>this.handleChange(e)}
        />
        <button onClick={(e)=>this.postNewPost(e)}>submit</button>
        <hr/>
        {loop}
      </div>
    );
  }
}


export default Dashboard;