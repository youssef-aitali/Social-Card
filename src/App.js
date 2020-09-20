import React, {Component} from 'react';
import PostList from './PostList';
import 'tachyons';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
 
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(reseponse => reseponse.json())
    .then(posts => this.setState({posts}));
  }

  render(){
    return <PostList posts={this.state.posts} />;
  }

}

export default App;
