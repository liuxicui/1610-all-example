import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends Component {
  constructor(){
    super();
    this.state={
      user: {},
      msg: "请登录"
    }
  }
  handleClick(e){
    e.preventDefault();
    const username = this.refs.username.value;
    axios.post('http://tiger.haoduoshipin.com/login', {username}).then(res => {
      console.log(res);
      this.setState({msg: res.data.msg});
    })
  }
  render(){
    return(
      <div>
        <div>{this.state.msg}</div>
        <form method="post" onClick={this.handleClick.bind(this)}>
          <input ref="username" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form;
