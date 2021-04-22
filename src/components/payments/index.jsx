import React from "react"
import Coins from "./coins"
import Notes from "./notes"
import Card from "./card"
import "./style.css"

// the payments component contains three methods for payment, coins, notes and card
class Payments extends React.Component {
    
    // it will provide the values for coins and notes
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
                {/* coins will allow the user to enter 10, 20, or 50 cents at a time or 1 full dollar */}
                <Coins data={this.state.coins} fn={addCoin}></Coins>

                {/* notes will allow the user to enter 20 or 50 dollar bills */}
                <Notes data={this.state.notes} fn={addNote}></Notes>

                {/* card will allow the user to enter a speciefied amount */}
                <Card fn={addCard}></Card>
            </div>)
    }
}

export default Payments