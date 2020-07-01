import React, { Component } from "react";
// import axios from "axios";
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {

  // WIHTOUT REDUX
  // state = {
  //   post: null
  // };

  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   console.log(id);
  //   axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(
  //     res => {
  //       this.setState({
  //         post: res.data
  //       })
  //     }
  //   )
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    // const post = this.state.post ? (
    const post = this.props.post ? (
      <div className="post">
        {/* <h4 className="center">{this.state.post.title}</h4> */}
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (
      <div>
        <h4 className="center">Loading Post...</h4>
      </div>
    )
    return (
      <div className="container">
        {post}
      </div>
    );
  }
}

const myFunctionToMapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id; // ROUTE PARAMETER
  return {
    post: state.myposts.find(post => post.id === id)
  }
}

const myMapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      // dispatch({type: 'DELETE_POST', id: id})
      // OR
      dispatch(deletePost(id))
    }
  }
}

export default connect(myFunctionToMapStateToProps, myMapDispatchToProps)(Post);
