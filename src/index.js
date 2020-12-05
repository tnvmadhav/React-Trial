import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class PasswordStrengthChecker extends React.Component {
  constructor(props){
    super(props);
    this.state = {color : 'black', status: 'Enter Password', password: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.assertStrength(event.target.value);
  }

  assertStrength(password){
    let len = password ? password.length : 0
    return len < 1 ? this.setState({ color: 'black', status: 'Enter Password', password: password})  :
           len < 6  ? this.setState({ color: 'red', status: 'Weak', password: password}) :
           len < 10 ? this.setState({ color: 'orange', status: 'Good', password: password}) :
           this.setState({ color: 'green', status: 'Strong', password: password}); 
  }


  render() {
    return (
      <div class='main-setting'>
      <h2 class='sub-setting'> Password Strength Checker </h2>
      <p class='sub-setting' style={{ color: this.state.color }}> {this.state.status} </p>
      <input type="password" onChange={this.handleChange}></input><small style={{ color: 'grey' }}> {this.state.password.length}</small>
      </div>
    );
  }
}

ReactDOM.render(
  <PasswordStrengthChecker/>,
  document.getElementById('root')
  );