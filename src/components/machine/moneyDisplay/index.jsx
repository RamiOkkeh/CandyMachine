import React from "react"
import "./style.css"

// the money display shows the value of how much money is credited to the machine currently 
function MoneyDisplay({money}) {
    return(<div className="moneyDisplay">credit: {Number(money).toFixed(2)}$</div>)
}

export default MoneyDisplay