import React from "react"
import "./style.css"

class Candy extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let {num, info} = this.props, [name, available, price] = info
        return(<div className="candy">
                {name}
        </div>)
    }
}

export default Candy