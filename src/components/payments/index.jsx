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
        let {addCoin, addNote, addCard} = this.props.methods
        return(<div className="payments">
                <Coins data={this.state.coins} fn={addCoin}></Coins>
                <Notes data={this.state.notes} fn={addNote}></Notes>
                <Card fn={addCard}></Card>
            </div>)
    }
}

export default Payments