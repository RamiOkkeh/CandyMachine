import React from 'react';
import Logger from './components/logger';
import Machine from "./components/machine"
import Payments from "./components/payments"
import './App.css';


// main app component
class App extends React.Component {
  // it will keep track of current money, earned money and logger history
  constructor(props){
    super(props)
    this.state = {
      history: "Welcome to the candy shop!!",
      currentMoney: 0,
      earned: 0,
      item: null,
    }
  }
  
  // method for keeping the logger focused on latest msg
  scroll = () => {
    var element = document.getElementById("logger");
    element.scrollTop = element.scrollHeight;
  }

  // method for attempting to purchase items
  purchase = (item = this.state.item, callback, deposit) => {
    let {currentMoney, earned, history} = this.state
    // check if the user selected an item
    if(item) {
      // save the item to the state for the use in case of delayed payment
      this.setState({item})
      
      // check if user has enough credit
      if(item[2] <= currentMoney){
        // update the state accordingly
        this.setState({
          currentMoney: 0,
          earned: earned + item[2],
          item: null,
          history: history + `\nyou purchase ${item[0]} for ${item[2]}$, the machine returns ${(currentMoney - item[2]).toFixed(2)}$`
        }, ()=>{
          // callback after the purchase has been complete
          this.scroll()
          if(callback) callback()
        })
      // in the case the user selects an item and doesn't have enough credit
      } else if(!deposit) {
        this.setState({history: history + `\nthe item is available, please deposit ${item[2]}$`}, ()=>this.scroll())
      }
    }
  }

  // method for updating the logger
  setHistory = (newMsg) => {
    this.setState({history: this.state.history + "\n" + newMsg}, ()=>this.scroll())
  }

  // method for payment in coins
  addCoin = (type) => {
    // update state accorgingly
    this.setState({
      currentMoney: this.state.currentMoney + (type === 1 ? 1 : type / 100),
      history: this.state.history + `\nyou add ${type === 1 ? "1$" : type + "c$"} to the machine`
    }, ()=>{
      // callback after the deposite has been complete
      this.scroll()
      // check if user deposited enough money to purchase the selected item 
      this.purchase(undefined, undefined, "deposit") // <-- third arrgument used to avoid repeating unnecessary lines to history
    })
  }

  // method for payment in notes
  addNote = (val) => {
    // update state accorgingly
    this.setState({
      currentMoney: this.state.currentMoney + val,
      history: this.state.history + `\nyou add ${val}$ to the machine`
    }, ()=>{
      // callback after the deposite has been complete
      this.scroll()
      // check if user deposited enough money to purchase the selected item 
      this.purchase(undefined, undefined, "deposit") // <-- third arrgument used to avoid repeating unnecessary lines to history
    })
  }

  // method for payment by card
  addCard = (val) => {
    // check if input is valid
    if(val === ""){
      this.setState({history: this.state.history + `\nyou must specify a value first`})
    } else {
      // update state accordingly
      this.setState({
        currentMoney: this.state.currentMoney + Number(val),
        history: this.state.history + `\nyou add ${val}$ to the machine`
      }, ()=>{
        // callback after the deposite has been complete
        this.scroll()
        // check if user deposited enough money to purchase the selected item 
        this.purchase(undefined, undefined, "deposit") // <-- third arrgument used to avoid repeating unnecessary lines to history
      })
    }
  }

  render(){
    // grouping props 
    let pMethods = {addCoin: this.addCoin, addNote: this.addNote, addCard: this.addCard, setHistory: this.setHistory}
    let mMethods = {currentMoney: this.state.currentMoney, earned: this.state.earned, purchase: this.purchase, setHistory: this.setHistory}
    
    return (
      <div className="App">

        {/* the machine component contains the candy display, the numpad, the credit and earning displays */}
        <Machine methods={mMethods}></Machine>

      <div>

        {/* the payments component contains three methods for payment, coins, notes and card */}
        <Payments methods={pMethods}></Payments>

        {/* the logger is used to display relevant information to the user */}
        <Logger history={this.state.history}></Logger>

      </div>
    </div>
    );
  }
}

export default App;
