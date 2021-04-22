import React from "react"

import MoneyDisplay from "./moneyDisplay"
import Candy from "./Candy"
import Pad from "./numpad"
import "./style.css"
import EarnedDisplay from "./earnedDisplay"

class Machine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            snacks: [["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],
                     ["candy6", 10, 1], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],
                     ["candy6", 10, 1], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],
                     ["candy6", 10, 1], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],
                     ["candy6", 10, 1], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],],
            images: ["https://www.elephanthouse.lk/images/site-specific/beverages/product-images/product-main-image/soda_bottle.png", 
                     "https://www.skinnypop.com/wp-content/uploads/2020/01/sea_salt_chips_main@2x.png",
                     "https://cdn.shopify.com/s/files/1/0041/7497/0991/products/819597010213_1_720bb4c2-d6c7-4911-8004-c39b326c04b4_1194x.png?v=1600454119",
                     "https://5.imimg.com/data5/JV/OM/QD/SELLER-22599387/candy-lollipop-500x500.png",
                     "https://www.hersheys.com/is/image/content/dam/smartlabelproductsimage/twizzlers/00034000502448-0011.png?wid=570&hei=570&fmt=png-alpha",]
        }
    }

    render(){
        let {currentMoney, earned} = this.props
        return(<div className="machine">

            <div className="candies">
                {this.state.snacks.map((info, i)=><Candy key={i} num={i} info={info} image={this.state.images[i%5]}></Candy>)}
            </div>
            <div className="flex-column">
                <Pad></Pad>
                <MoneyDisplay money={currentMoney}></MoneyDisplay>
                <EarnedDisplay earned={earned}></EarnedDisplay>
            </div>
            
        </div>)
    }
}

export default Machine