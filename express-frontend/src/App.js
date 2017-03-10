import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: ''
    };
  }
  componentWillMount() {
    axios.get('http://localhost:3000/username').then( (response)=> {
      return this.setState({username:response.data.username})
    })
  }
  render(){
    return(
      <div>
        {this.state.username}
      </div>
    )
  }
}

export default App;
