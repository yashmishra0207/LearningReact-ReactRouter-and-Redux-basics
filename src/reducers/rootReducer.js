const initState = {
  myposts: [
    {id: '1', title: "Complete React & Redux Tutorial", body: "This will cover all the basics of react so as to get an entry in the world of react."},
    {id: '2', title: "React with Firebase", body: "You will be introduced to various aliens in the react planet and also some introduction to firebase."},
    {id: '3', title: "React Hooks and Contexts", body: "Some more intro so as to convert aliens in to friends and live happily on to the react planet"}
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST') {
    let newPosts = state.myposts.filter(post => post.id !== action.id)
    return {
      ...state,
      myposts: newPosts
    }
  }
  return state;
}

export default rootReducer;