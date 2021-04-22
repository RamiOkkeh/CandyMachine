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
      item: null,
    }
  }
  
  scroll = () => {
    var element = document.getElementById("logger");
    element.scrollTop = element.scrollHeight;
  }

  purchase = (item = this.state.item, callback, deposit) => {
    let {currentMoney, earned, history} = this.state
    if(item) {
      this.setState({item})
      if(item[2] <= currentMoney){
        this.setState({
          currentMoney: 0,
          earned: earned + item[2],
          item: null,
          history: history + `\nyou purchase ${item[0]} for ${item[2]}$, the machine returns ${(currentMoney - item[2]).toFixed(2)}$`
        }, ()=>{
          this.scroll()
          if(callback) callback()
        })
      } else if(!deposit) {
        this.setState({history: history + `\nthe item is available, please deposit ${item[2]}$`}, ()=>this.scroll())
      }
    }
  }

  setHistory = (newMsg) => {
    this.setState({history: this.state.history + "\n" + newMsg}, ()=>this.scroll())
  }

  addCoin = (type) => {
    this.setHistory()
    this.setState({
      currentMoney: this.state.currentMoney + (type === 1 ? 1 : type / 100),
      history: this.state.history + `\nyou add ${type === 1 ? "1$" : type + "c$"} to the machine`
    }, ()=>{
      this.scroll()
      this.purchase(undefined, undefined, "deposit")
    })
  }

  addNote = (val) => {
    this.setState({
      currentMoney: this.state.currentMoney + val,
      history: this.state.history + `\nyou add ${val}$ to the machine`
    }, ()=>{
      this.scroll()
      this.purchase(undefined, undefined, "deposit")
    })
  }

  addCard = (val) => {
    if(val === ""){
      this.setState({history: this.state.history + `\nyou must specify a value first`})
    } else {
      this.setState({
        currentMoney: this.state.currentMoney + Number(val),
        history: this.state.history + `\nyou add ${val}$ to the machine`
      }, ()=>{
        this.scroll()
        this.purchase(undefined, undefined, "deposit")
      })
    }
  }

  render(){
    let pMethods = {addCoin: this.addCoin, addNote: this.addNote, addCard: this.addCard, setHistory: this.setHistory}
    let mMethods = {currentMoney: this.state.currentMoney, earned: this.state.earned, purchase: this.purchase, setHistory: this.setHistory}
      return (
        <div className="App">
        <Machine methods={mMethods}></Machine>
        <div>
          <Payments methods={pMethods}></Payments>
          <Logger history={this.state.history}></Logger>
        </div>
      </div>
    );
  }
}

export default App;
