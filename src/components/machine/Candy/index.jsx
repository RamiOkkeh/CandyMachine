import React from "react"
import "./style.css"

// the candy component displays an items name, id, price and image
class Candy extends React.Component {
    render(){
        let {num, info, image} = this.props, [name, available, price] = info
        return(
            // the candy container will dynamicly change to display the status of available candy
            <div className={info[1] > 0 ? "candy" : "candy notAvailable"} style={{backgroundImage: `url(${image})`}}>
                <div>
                    {/* shows the price in a green box */}
                    <span className="price"> {price}$ </span> 
                    {/* shows the id in a orange box */}
                    <span className="num">{num}</span> 
                </div>

                {/* displays the item name at the bottom */}
                <span className="itemName">{name}</span>
            </div>
            )
    }
}

export default Candy