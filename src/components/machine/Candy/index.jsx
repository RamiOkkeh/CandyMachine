import React from "react"
import "./style.css"

class Candy extends React.Component {
    render(){
        let {num, info, image} = this.props, [name, available, price] = info
        return(<div className="candy" style={{backgroundImage: `url(${image})`}}>
                <div>{name} {available}
                <span className="price"> {price}$ </span> 
                <span className="num">{num}</span> </div>
        </div>)
    }
}

export default Candy