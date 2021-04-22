import React from "react"
import "./style.css"


function Button({val, fn}) {
    return (<button className="padButton" onClick={()=>fn(val)}>{val}</button>)
}

class Pad extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current: "",
            vals: [1,2,3,4,5,6,7,8,9,"del",0,"submit"]
        }
    }
    onPress = (val) => {
        if(val === "submit"){
            let itemNum = document.getElementById("itemNum").innerText
            if(itemNum > 24){
                this.props.setHistory("please select an item from the list")
            } else if (itemNum !== ""){
                this.props.selectItem(Number(itemNum), ()=>this.setState({current: ""}))
            } else {
                this.props.setHistory("please select an item first")
            }
        } else if(val === "del"){
            this.setState({current: this.state.current.slice(0,-1)})
        } else if(this.state.current.length < 2){
            this.setState({current: this.state.current + val})
        }
    }
    render(){
        return(<div className="numpad">
                <div className="pad">
                    {this.state.vals.map((val, i)=><Button key={i} val={val} fn={this.onPress}></Button>)}
                </div>
                <div className="itemDisplay" id="itemNum">{this.state.current}</div>
        </div>)
    }
}

export default Pad