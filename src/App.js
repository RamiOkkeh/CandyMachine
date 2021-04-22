import React from 'react';
import Logger from './components/logger';
import Machine from "./components/machine"
import Payments from "./components/payments"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history: "Welcome to the candy shop!!",
      currentMoney: 0,
      earned: 0,
      item: [],
    }
  }
  
  scroll = () => {
    var element = document.getElementById("logger");
    element.scrollTop = element.scrollHeight;
  }

  purchase = () => {
    
  }

  setHistory = (newMsg) => {
    this.setState({history: this.state.history + "\n" + newMsg}, ()=>this.scroll())
  }

  addCoin = (type) => {
    this.setHistory()
    this.setState({
      currentMoney: this.state.currentMoney + (type === 1 ? 1 : type / 100),
      history: this.state.history += `\nyou add ${type === 1 ? "1$" : type + "c$"} to the machine`
    }, ()=>this.scroll())
  }

  addNote = (val) => {
    this.setState({
      currentMoney: this.state.currentMoney + val,
      history: this.state.history += `\nyou add ${val}$ to the machine`
    }, ()=>this.scroll())
  }

  addCard = (val) => {
    this.setState({
      currentMoney: this.state.currentMoney + Number(val),
      history: this.state.history += `\nyou add ${val}$ to the machine`
    }, ()=>this.scroll())
  }


  render(){
    let pMethods = {addCoin: this.addCoin, addNote: this.addNote, addCard: this.addCard, setHistory: this.setHistory}
      return (
        <div className="App">
        <Machine currentMoney={this.state.currentMoney} earned={this.state.earned}></Machine>
        <div>
          <Payments methods={pMethods}></Payments>
          <Logger history={this.state.history}></Logger>
        </div>
      </div>
    );
  }
}

export default App;
