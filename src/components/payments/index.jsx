import React from "react"
import Coins from "./coins"
import Notes from "./notes"
import Card from "./card"
import "./style.css"

class Payments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            coins: [10, 20, 50, 1],
            notes: [20, 50]
        }
    }
    render(){
        return(<div className="payments">
                <Coins data={this.state.coins}></Coins>
                <Notes data={this.state.notes}></Notes>
                <Card></Card>
            </div>)
    }
}

export default Payments