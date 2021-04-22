import React from "react"
import "./style.css"

function Note ({note, fn}){
    return (<button className="noteButton" onClick={()=>fn(note)}>{note + "$"}</button>)
}


class Notes extends React.Component {
    render(){
        let {data} = this.props
        return(<div className="notes">
                <img src="https://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/62878-dollar-banknote-icon.png" width="100" alt="notes"/>
                {data.map((note, i)=> <Note key={i} note={note} fn={this.props.fn}></Note>)}
            </div>)
    }
}

export default Notes