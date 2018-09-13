import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.postid;
    axios
      .post(`/api/post/${id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("match made! => ", this.props.match.params.postid);
    console.log("state from post ", this.state);
    let {post} = this.state
    let loopThisPost = post.map((e, i) => {
      return (
        <div key={i}>
          <h4>Post id: {e.postid}</h4>
          <h3>Title: {e.title}</h3>
          <h5> Body : {e.post}</h5>
        </div>
      );
    });

    return (
      <div>
        {loopThisPost}
      </div>
    );
  }
}

export default Post;