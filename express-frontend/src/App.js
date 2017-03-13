import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form';

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  handleClick1(e){
    e.preventDefault();
    axios.get('http://tiger.haoduoshipin.com/users/1')
      .then(res => this.setState({users:res.data.username})
    )
  }
  handleClick2(e){
    e.preventDefault();
    axios.get('http://tiger.haoduoshipin.com/users/2')
      .then(res => this.setState({users:res.data.username})
    )
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick1.bind(this)}>1</button><br />
        <button onClick={this.handleClick2.bind(this)}>2</button><br />
         username:{this.state.users}
         <Form />
      </div>
    )
  }
}

export default App;
