import React from "react"
import "./style.css"

class Cards extends React.Component {

    cardPay = () => {
        let input = document.getElementById("cardVal")
        this.props.fn(input.value)
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