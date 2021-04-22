import React from "react"
import "./style.css"

function MoneyDisplay({money}) {
    return(<div className="moneyDisplay">credit: {Number(money).toFixed(2)}$</div>)
}

export default MoneyDisplay