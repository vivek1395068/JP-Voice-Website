import React from "react";
import "../assets/css/stylesheet.css";

export default class HKleftTab extends React.Component {
    render(){
        return (
            <div id="HKleftTab">
                <div id="HKTab1">
                    <i id="HKleftTabhomeicon" className="fa fa-home"></i>
                    <span style={{textAlign:"center", position:"absolute",top:"54px",marginLeft:"2%"}}>Home</span>
                    {/* <p style={{paddingTop:"16%"}}>HK2 !!!!</p> */}
                </div>
            </div>
        )
    }
}