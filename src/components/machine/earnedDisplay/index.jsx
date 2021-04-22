import React from "react"
import "./style.css"

// the earned money display shows the value money the machine accumulated so far
function EarnedDisplay({earned}) {
    return(<div className="earnedDisplay">earned: {earned.toFixed(2)}$</div>)
}

export default EarnedDisplay