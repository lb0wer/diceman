import React, { Component } from 'react';
import './App.css';
import logo from'./dice-logo.png';

class App extends Component {
  state;

  constructor(props) {
    super(props);
    this.state = {
      chosenChoice: null,
      newChoice: null,
      choices: [],
      alert: false,
    }
  }

  componentDidMount() {
    this.enterKeyListener();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>DiceLife</h1>
          <img src={logo} height="180" width="215"/>
          <p>Let fate dictate your life decisions</p>
          <br/>
          <div className="container-fluid">
            {this.choiceList()}
          </div>
          <div className="container-fluid">
            {this.newChoice()}
          </div>
          <br/>
          {this.state.alert && this.alert()}
          <div style={{ paddingLeft: '2em', paddingRight: '2em' }}>
            <button type="button" className="btn btn-info btn-lg"
              onClick={() => this.roll()}>
              Roll
            </button>
          </div>
          <br/>
          <button type="button" className="btn btn-secondary"
            onClick={() => this.reset()}>
            Reset
          </button>
        </header>
      </div>
    );
  }

  get numChoices() {
    return this.state.choices.length;
  }


  choiceList() {
    let choiceElements = [];
    let i = 1;
    for( let choice of this.state.choices) {
      let style = i === this.state.chosenChoice ?
        { color: 'green' } :
        { color: 'black' };
      choiceElements.push(
        <li key={i} style={style} className="list-group-item">{i}. {choice}</li>
      );
      i++;
    }
    return (
      <ol className="list-group">
        {choiceElements}
      </ol>
    )
  }

  newChoice() {
    return (
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="New Choice"
            value={this.state.newChoice} 
            onChange={this.newChoiceChange.bind(this)} 
            onSubmit={this.addChoice.bind(this)}
            id='newChoice'
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"
              onClick={() => this.addChoice()}>
              Add</button>
          </div>
        </div>
    )
  }

  newChoiceChange(event) {
    let text = event.target.value;
    this.setState({ newChoice: text });
  }

  enterKeyListener() {
    let input = document.getElementById("newChoice");
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) { // enter key
        event.preventDefault();
        this.addChoice();
      }
    });
  }

  addChoice() {
    if(this.state.newChoice === null || this.state.newChoice === '') {
      return;
    }
    let newChoice = this.state.newChoice;
    let choices = this.state.choices;
    choices.push(newChoice);
    this.setState({
      newChoice: '',
      choices,
    })
  }

  roll() {
    let num = Math.ceil(Math.random() * this.numChoices );
    this.setState({
      chosenChoice: num,
      alert: true,
    })
  }

  alert() {
    if(this.numChoices < 1) {
      return <div className="alert alert-success" role="alert">
        Please enter an option
    </div>
    }
    return (
      <div className="alert alert-success" role="alert">
        {`The dice has chosen. You must take choice 
          ${this.state.chosenChoice}:
          ${this.state.choices[this.state.chosenChoice -1]}
        `}
      </div>
    )
  }

  reset() {
    this.setState({
      alert: false,
      choices: [],
      newChoice: '',
    })
  }
}

export default App;
