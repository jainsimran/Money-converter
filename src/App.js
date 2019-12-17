import React, { Component } from 'react';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      inputAmount: 0,
      isConvert: false,
      candianCurr: 0,
      usdCurr: 0,
      mexicanCurr: 0,
      indianCurr: 0 
    }
    this.convertMoney= this.convertMoney.bind(this);
  }

  convertMoney(){
    fetch('https://api.exchangeratesapi.io/latest/')
    .then(data => {
      return data.json();
    })
    .then(result => {
      console.log(result);
      let cadianResult = this.state.candianCurr;
      let usdResult = this.state.usdCurr;
      let mexicanResult = this.state.mexicanCurr;
      let indianResult = this.state.indianCurr;
      let inputAmt = this.state.inputAmount;
      cadianResult = inputAmt * result.rates.CAD;
      usdResult = inputAmt * result.rates.USD;
      mexicanResult = inputAmt * result.rates.MXN;
      indianResult = inputAmt * result.rates.INR;
      this.setState({ 
        candianCurr: cadianResult.toFixed(2),
        usdCurr: usdResult.toFixed(2),
        mexicanCurr: mexicanResult.toFixed(2),
        indianCurr: indianResult.toFixed(2)
      })
    })
    .catch(err => {
      console.log('Something bad happened!');
    })
  }

  render() {
    return (
      <div>
        Enter US dollar 
        <input type="text" value={this.state.inputAmount} placeholder = "enter US dollars" onChange={(e) => this.setState({inputAmount: e.target.value})}></input>
        <button onClick={this.convertMoney}> convert </button>
        <p>Canadian = {this.state.candianCurr}</p> 
        <p>USD = {this.state.usdCurr} </p>
        <p>Mexican peso = {this.state.mexicanCurr} </p>
        <p>Indian rupess = {this.state.indianCurr} </p>
      </div>
    )
  }
}
