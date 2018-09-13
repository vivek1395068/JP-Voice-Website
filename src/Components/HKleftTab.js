import React from "react";
import "../assets/css/stylesheet.css";
import homeImg from "../assets/img/Home2.jpg"

export default class HKleftTab extends React.Component {
    render(){
        return (
            <div id="HKleftTab">
                <div id="HKTab1">
                    <img id="HKleftTabhomeimg" src={homeImg}></img>
                    <span style={{textAlign:"center", position:"absolute",top:"54px"}}>Home</span>
                    {/* <p style={{paddingTop:"16%"}}>HK2 !!!!</p> */}
                </div>
            </div>
        )
    }
}