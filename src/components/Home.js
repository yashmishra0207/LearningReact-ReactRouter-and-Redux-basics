import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {

  // WITHOUT USING REDUX
  // state = {
  //   posts: []
  // }

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => {
  //       this.setState({
  //         posts: response.data.slice(0,10)
  //       })
  //     })
  // }

  render() {
    console.log(this.props);
    // const { posts } = this.state;
    const { postsToBeDisplayed } = this.props;
    const postList = postsToBeDisplayed.length ? (
      postsToBeDisplayed.map(post => {
        return (
          <div className="post card" key={post.id}>
          <img src={Pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={'/'+post.id}><span className="card-title">{post.title}</span></Link>
              <p className="card-body">{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet!</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mymapStateToPropsFunction = (storehouse) => {
  return {
    postsToBeDisplayed: storehouse.myposts
  }
}

export default connect(mymapStateToPropsFunction)(Home);