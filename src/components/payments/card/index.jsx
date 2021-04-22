import React from "react"
import "./style.css"

// card will allow the user to enter a speciefied amount
class Cards extends React.Component {

    // method for submitting payment
    cardPay = () => {
        // find the value the user specified
        let input = document.getElementById("cardVal")
        // call the method passed through from app.js on the value specified
        this.props.fn(input.value)
        // reset the value
        input.value = ""
    }

    render(){
        return(<div className="cards">
                <img src="https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png" width="100px" alt="cards"/>
                <input type="number" id="cardVal" min="0"/>
                <button onClick={this.cardPay}>pay</button>
            </div>)
    }
}

export default Cards