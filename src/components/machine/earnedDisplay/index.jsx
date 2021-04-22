import React from "react"
import "./style.css"

function EarnedDisplay({earned}) {
    return(<div className="earnedDisplay">earned: {earned.toFixed(2)}$</div>)
}

export default EarnedDisplay