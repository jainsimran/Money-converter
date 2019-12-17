import React, { Component } from 'react';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      inputAmount: 0,
      isConvert: false,
      result: 0
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
      let resultAmount = this.state.result;
      let inputAmt = this.state.inputAmount;
      resultAmount = inputAmt * result.rates.CAD;
      this.setState({ result:resultAmount.toFixed(2) })
    })
    .catch(err => {
      console.log('Something bad happened!');
    })
  }

  render() {
    return (
      <div>
        Enter US dollar = 
        <input type="text" value={this.state.inputAmount} placeholder = "enter US dollars" onChange={(e) => this.setState({inputAmount: e.target.value})}></input>
        <button onClick={this.convertMoney}> convert to CAD </button>

        {this.isConvert ? <h1>Canadian dollars = {this.state.result}</h1> : <h1>Canadian dollars = {this.state.result}</h1> }
        {/* {this.isConvert ? <h1>Canadian dollars is {this.result}</h1> : <h1> Enter values to convert</h1> } */}
      </div>
    )
  }
}
