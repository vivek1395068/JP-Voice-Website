import React from "react";
import "../assets/css/stylesheet.css";

export default class HKheader extends React.Component {

    onDropdownClick(){
        document.querySelectorAll(".dropdown-menu")[0].style.display = document.querySelectorAll(".dropdown-menu")[0].style.display==="block"?"none":"block"
    }
    
    render(){
        return (
            <div id="HKheader">
                <div >Jagannath Puri Voice !!!!</div>
                <span id="dropdown" className="dropdown" onClick={this.onDropdownClick.bind(this)} style={{left:"32%"}}>
                    <button id="dropdownbutton" style={{backgroundColor:"steelblue",borderColor:"#fff"}} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">menu <span className="caret"></span></button>
                    <ul id="dropdown-menu" style={{display:"none"}} className="dropdown-menu">
                        <li><a href="https://iskcondesiretree.com/page/vaishnava-calendar-2018">About Voice</a></li>
                        <li><a href="https://iskcondesiretree.com/page/vaishnava-calendar-2018">Login/Logout</a></li>
                        <li><a href="http://radheshyamdas.com/">Radheshyam Prabhu Website</a></li>
                        <li><a href="https://prabhupadavani.org/">Prabhupada Vani</a></li>
                        <li><a href="http://radheshyamdas.com/">Audio/Video Sections</a></li>
                        <li><a href="http://radheshyamdas.com/">Voice Status</a></li>
                        <li><a href="http://radheshyamdas.com/">Financial </a></li>
                        <li><a href="http://radheshyamdas.com/">Devotional</a></li>
                        <li><a href="http://radheshyamdas.com/">Preaching</a></li>
                        <li><a href="http://radheshyamdas.com/">Service Opportunities</a></li>
                        {/* <li><a href="https://iskcondesiretree.com/page/vaishnava-calendar-2018">Vaishnava Calendar</a></li> */}
                    </ul>
                </span>
                <span id="HKheaderusericon" className="glyphicon glyphicon-user" style={{left:"34%"}}></span>
                <span id="HKheadersettingsicon" className="glyphicon glyphicon-cog" style={{left:"34%"}}></span>
            </div>
        )
    }
}