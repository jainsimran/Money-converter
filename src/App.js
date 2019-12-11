import React, { Component } from 'react';
import Converted from './Converted';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      usCurr: 0
    }
    this.convertMoney= this.convertMoney.bind(this);
  }

  convertMoney(){
    let usNum = this.state.usCurr;
    let resultnum = usNum *20;
    <Converted result = {this.resultnum} />
  }

  render() {
    return (
      <div>
        <input type="text" value={this.usCurr} onChange={(e) => this.setState({usCurr: e.target.value})}></input>
        {/* <input type="text" value={this.usCurr}></input> */}
        <button onClick={this.convertMoney}> convert </button>
      </div>
    )
  }
}
