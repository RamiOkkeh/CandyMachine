import React from "react"
import Candy from "./Candy"

class Machine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoney: 0,
            earned: 0,
            snacks: [["soda", 10, 2.2], ["chips", 5, 3.5], ["chokolate", 1, 10.5], ["candy4", 12, 3], ["candy5", 5, 2],
                     ["candy6", 10, 1]],
        }
    }

    render(){
        return(<div className="machine">
                {this.state.snacks.map((info, i)=><Candy key={i} num={i} info={info}></Candy>)}
        </div>)
    }
}

export default Machine