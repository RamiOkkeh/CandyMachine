import "./style.css"

// the logger is used to display relevant information to the user
function Logger({history}) {
    return(<p className="logger" id="logger" name="log">{history}</p>)
}

export default Logger