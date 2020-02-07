import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super();
    this.state= {
      inputAmount: null,
      isConvert: false,
      selectedCurr: null,
      result: null,
      contryList: []
    }
    this.convertMoney= this.convertMoney.bind(this);
  }

  convertMoney(){
    fetch('https://api.exchangeratesapi.io/latest/')
    .then(data => {
      return data.json();
    })
    .then(result => {
      console.log(result.rates);
      let currResult = this.state.result;
      let currChange = this.state.selectedCurr;
      let inputAmt = this.state.inputAmount;
      if(currChange === "CAD"){
        currResult = inputAmt * result.rates.CAD;
      }
      else if(currChange === "INR"){
        currResult = inputAmt * result.rates.INR;
      }
      else if(currChange === "NZD"){
        currResult = inputAmt * result.rates.NZD;
      }
      else if(currChange === "AUD"){
        currResult = inputAmt * result.rates.AUD;
      }
      else if(currChange === "CZK"){
        currResult = inputAmt * result.rates.CZK;
      }
      this.setState({ 
        result: currResult.toFixed(2),
        isConvert: true
      })
    })
    .catch(err => {
      console.log('Something bad happened!');
    })
  }

  render() {
    return (
      <div> 
       <h1>US dollar convertor</h1>
        <input 
          type="text" 
          value={this.state.inputAmount} 
          placeholder = "enter US dollars" 
          onChange={(e) => this.setState({inputAmount: e.target.value,isConvert:false })}>
        </input>
        <select onChange = {(event) => this.setState({ selectedCurr: event.target.value,isConvert:false})}>
          <option> Select Curreny</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="NZD">NZD</option>
          <option value="AUD">AUD</option>
          <option value="CZK">CZK</option>
        </select>

        <div>
        <button onClick={this.convertMoney}> convert </button>
        </div>
        <p> { this.state.isConvert ? `${this.state.selectedCurr} = ${this.state.result}` : null }</p>
      </div>
    )
  }
}