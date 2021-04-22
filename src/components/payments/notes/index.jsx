import React from "react"
import "./style.css"

function Note ({note}){
    return (<button className="noteButton">{note + "$"}</button>)
}


class Notes extends React.Component {
    render(){
        let {data} = this.props
        return(<div className="notes">
                <img src="https://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/62878-dollar-banknote-icon.png" width="100" alt="notes"/>
                {data.map((note, i)=> <Note key={i} note={note}></Note>)}
            </div>)
    }
}

export default Notes