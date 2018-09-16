import React from "react";
import "../assets/css/stylesheet.css";

export default class HKheader extends React.Component {
    render(){
        return (
            <div id="HKheader">
                <div>Jagannath Puri Voice !!!!</div>
                <i id="HKheaderusericon" className="fa fa-user"></i>
                <i id="HKheadersettingsicon" className="fa fa-gear"></i>
            </div>
        )
    }
}