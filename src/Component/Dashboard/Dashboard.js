import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      search: "",
      myposts: true,
      editing: false,
      content: ""
    };
  }
  componentDidMount = () => {
    this.getAllPosts();
  }

  handleClick = (search) => {
    this.setState({ search });
  }

  handleReset = () =>  {
    this.setState({ search: "", myposts: true });
  }

  handleMyPosts = () => {
    this.setState({ myposts: false });
  }

  handleChange = () => {
    let { search, myposts } = this.state;
    let { id } = this.props;
    this.getMyPosts(id, search, myposts);
  }

  getAllPosts = () => {
    axios.get(`/api/getPostUser`).then(res => {
      this.setState({ posts: res.data });
    });
  }

  getMyPosts = (id, search, myposts) => {
    axios
      .post(`/api/userPost/${id}`, { search: search, myposts: myposts })
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  handleEdit = () => {
    this.setState({ editing: true });
  }
  handleEditFunction = (content) => {
    this.setState({ content });
  }

  buttonClickDelete = (id) => {
    axios
      .delete(`/api/delete/?id=${id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  handleSendEdit = (title) => {
    this.setState({ editing: false });
    axios
      .put(`/api/updatePost/${title}`, { content: this.state.content })
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let postMap = this.state.posts
      .filter((post, i) => {
        let { title } = post;
        return title.includes(this.state.search);
      })
      .map((post, i) => {
        let { id, title, profile_pic, img, username, content, post_id } = post;
        return (
          <div key={i}>
            <div>{title}</div>
            <img src={img} alt="" height="120" width="120" />
            {!this.state.editing ? (
              <p onClick={e => this.handleEdit(e)}>{content}</p>
            ) : (
              <input
                onChange={e => this.handleEditFunction(e.target.value)}
                onBlur={e => this.handleSendEdit(title)}
              />
            )}
            <hr />
            <Link to={`/post/${post_id}`}>Details</Link>
            <br />
            <button onClick={e => this.buttonClickDelete(id)}>Delete</button>

            <br />
            <div>{username}</div>
            <img src={profile_pic} alt="" height="60" width="60" />
          </div>
        );
      });
    return (
      <div>
        
        <input
          onChange={e => this.handleClick(e.target.value)}
          type="text"
          value={this.state.search || ""}
          placeholder="Search Posts by Title"
        />
        <br />
        <input
          type="checkbox"
          defaultChecked={this.state.myposts}
          name="myPostsCB"
          onChange={() => this.handleMyPosts()}
        />
        My Posts
        <br />
        <br />
        <button
          type="search button"
          onClick={() => this.handleClick()}
          className="SearchButton"
        >
          Search My Posts
        </button>
        <br />
        <button className="CancelButton" onClick={() => this.handleReset()}>
          Reset
        </button>
        {postMap}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  null
)(Dashboard);