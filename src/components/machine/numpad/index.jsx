import React from "react"
import "./style.css"

// creates a buttom component for each of the numpad buttons
function Button({val, fn}) {
    return (<button className="padButton" onClick={()=>fn(val)}>{val}</button>)
}

// the pad component displays a numpad and display to allow the user to select an item by id
class Pad extends React.Component {
    // it will keep track of the current number input by the user
    constructor(props){
        super(props)
        this.state = {
            current: "",
            vals: [1,2,3,4,5,6,7,8,9,"del",0,"submit"]
        }
    }

    // method for handling user clicking the numpad
    onPress = (val) => {
        // in the case the user presses submit
        if(val === "submit"){
            // save current value in a variable
            let itemNum = this.state.current
            
            // reset the current value 
            this.setState({current: ""})

            // check if item is is range
            if(itemNum > 24){
                this.props.setHistory("please select an item from the list")
            
            // check if item is selected
            } else if (itemNum !== ""){
                this.props.selectItem(Number(itemNum))
            
            // condition for empty input
            } else {
                this.props.setHistory("please select an item first")
            }

        // in the case the user presses delete
        } else if(val === "del"){
            // slice out the last elements from the current selected value
            this.setState({current: this.state.current.slice(0,-1)})

        // in case user clicks anything else
        } else if(this.state.current.length < 2){
            // add the new value to the end of the current value
            this.setState({current: this.state.current + val})
        }
    }
    render(){
        return(
        <div className="numpad">

            {/* displays the buttons for the numpad in a grid */}
            <div className="pad">
                {this.state.vals.map((val, i)=><Button key={i} val={val} fn={this.onPress}></Button>)}
            </div>

            {/* display the currently selected value */}
            <div className="itemDisplay" id="itemNum">{this.state.current}</div>
        </div>)
    }
}

export default Pad