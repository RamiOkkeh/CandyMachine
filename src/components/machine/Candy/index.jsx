import React from "react"
import "./style.css"

class Candy extends React.Component {
    render(){
        let {num, info, image} = this.props, [name, available, price] = info
        return(
        <div className={info[1] > 0 ? "candy" : "candy notAvailable"} style={{backgroundImage: `url(${image})`}}>
            <div>
                <span className="price"> {price}$ </span> 
                <span className="num">{num}</span> 
            </div>
            
            <span className="itemName">{name}</span>
        </div>)
    }
}

export default Candy