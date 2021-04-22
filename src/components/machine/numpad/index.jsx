import React from "react"
import "./style.css"


function Button({val}) {
    return (<button className="padButton">{val}</button>)
}

class Pad extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current: "",
            vals: [1,2,3,4,5,6,7,8,9,"del",0,"submit"]
        }
    }
    render(){
        return(<div>
                <div className="pad">
                    {this.state.vals.map((val, i)=><Button key={i} val={val}></Button>)}
                </div>
                <div className="display">{this.state.current}</div>
        </div>)
    }
}

export default Pad