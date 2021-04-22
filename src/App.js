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
      
    }
  }

  setHistory = (newMsg) => {
    this.setState({history: this.state.history + "\n" + newMsg})
    var element = document.getElementById("logger");
    element.scrollTop = element.scrollHeight;
  }


  render(){
      return (
        <div className="App">
        <Machine></Machine>
        <div>
          <Payments></Payments>
          <Logger history={this.state.history}></Logger>
        </div>
        
      </div>
    );
  }
}

export default App;
