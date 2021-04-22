import React from "react"
import "./style.css"

class Payments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            coins: [10, 20, 50, 1],
            notes: [20, 50]
        }
    }
    render(){
        return(<div className="payments">
                <div className="pMethod"></div>
                <div className="pMethod"></div>
                <div className="pMethod"></div>
            </div>)
    }
}

export default Payments