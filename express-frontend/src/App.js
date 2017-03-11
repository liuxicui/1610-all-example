import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }
  componentWillMount() {
    axios.get('http://localhost:3000/users').then( (response)=> {
      this.setState({users:response.data.users});

    })
  }
  render(){
    let userList = this.state.users.map((user,i) => {
      return(
        <div key={i}>
          name:{user.username}
        </div>
      )
    })
    return(
      <div>
        个人资料:{userList}
      </div>
    )
  }
}

export default App;
