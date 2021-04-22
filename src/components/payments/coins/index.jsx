import React from "react"
import "./style.css"

function Coin ({coin}){
    return (<button className="coinButton">{coin === 1 ? "1$" : coin + "c$"}</button>)
}


class Coins extends React.Component {
    render(){
        let {data} = this.props
        return(<div className="coins">
                <img src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png" width="100" alt="coins"/>
                {data.map((coin, i)=> <Coin key={i} coin={coin}></Coin>)}
            </div>)
    }
}

export default Coins