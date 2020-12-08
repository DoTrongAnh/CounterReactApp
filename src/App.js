import React, { Component } from 'react';
import './App.css';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      textFieldValue: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const num = parseInt(event.target.value);
    this.setState({
      textFieldValue: isNaN(num)? 0 : num
    });
  }
  countUp(){
    const count = this.state.count + 1;
    this.setState({count:count});
  }
  
  countDown(){
    const count = this.state.count - 1;
    this.setState({count:count});
  }
  handleSubmit(event){
    const a = this.state.textFieldValue;
    this.setState({count:a});
    event.preventDefault();
  }
  render(){
    let count = this.state.count;
    return (
      <div className="counter">
        <div className="text-input">
          <form onSubmit={this.handleSubmit}>
            <label>
              An integer:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" style={{backgroundColor:'green',color:'white'}} value="Assign" />
          </form>
          <button className="button" style={{backgroundColor:'blue',color:'white'}} onClick={()=>this.countUp()}>Count up</button>
          <button className="button" style={{backgroundColor:'red',color:'white'}} onClick={()=>this.countDown()}>Count down</button>
        </div>
        <div className="count">
          <div>{count}</div>
        </div>
      </div>
    );
  }
}

export default Counter;
