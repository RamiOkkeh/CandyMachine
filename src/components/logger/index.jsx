import {useState} from "react"
import "./style.css"

function Logger({history}) {
    return(<p className="logger" id="logger" name="log">{history}</p>)
}

export default Logger