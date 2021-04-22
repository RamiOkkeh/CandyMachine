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
            snacks: [["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["lolipop", 12, 3], ["ice cream", 5, 2],
                     ["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["lolipop", 12, 3], ["ice cream", 5, 2],
                     ["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["lolipop", 12, 3], ["ice cream", 5, 2],
                     ["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["lolipop", 12, 3], ["ice cream", 5, 2],
                     ["soda", 10, 2.2], ["chips", 5, 3.5], ["chocolate", 1, 10.5], ["lolipop", 12, 3], ["ice cream", 5, 2],],
            images: ["https://www.elephanthouse.lk/images/site-specific/beverages/product-images/product-main-image/soda_bottle.png", 
                     "https://www.skinnypop.com/wp-content/uploads/2020/01/sea_salt_chips_main@2x.png",
                     "https://cdn.shopify.com/s/files/1/0041/7497/0991/products/819597010213_1_720bb4c2-d6c7-4911-8004-c39b326c04b4_1194x.png?v=1600454119",
                     "https://5.imimg.com/data5/JV/OM/QD/SELLER-22599387/candy-lollipop-500x500.png",
                     "https://cdn.carvel.com/-/media/carvel/menu/ice-cream/soft-serve/2-chocolate-new.png?v=1&d=20180430T193908Z&h=600&w=600&la=en&hash=78EF4BE6817E692ACEDC66FE8FDF5140",]
        }
    }

    selectItem = (num, callback) => {
        let item = this.state.snacks[num]
        if(item[1] > 0){
            this.props.methods.purchase(item, ()=>{
                this.setState((old)=> {
                    old.snacks[num][1]-=1
                    return old 
                })
            })
        } else {
            this.props.methods.setHistory("the item you attempt to purchase is out of stock!")
        }
    }

    render(){
        let {currentMoney, earned, setHistory} = this.props.methods
        return(<div className="machine">

            <div className="candies">
                {this.state.snacks.map((info, i)=><Candy key={i} num={i} info={info} image={this.state.images[i%5]}></Candy>)}
            </div>
            <div className="flex-column">
                <Pad selectItem={this.selectItem} setHistory={setHistory}></Pad>
                <MoneyDisplay money={currentMoney}></MoneyDisplay>
                <EarnedDisplay earned={earned}></EarnedDisplay>
            </div>
            
        </div>)
    }
}

export default Machine