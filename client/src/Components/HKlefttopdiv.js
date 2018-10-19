import React from "react";
import "../assets/css/stylesheet.css"

export default class HKlefttopdiv extends React.Component {
    onIframeClick(){debugger
        window.open("http://radheshyamdas.com/")
    }
    render(){
        return (
            <div id="HKlefttopdiv" onClick={this.onIframeClick.bind(this)}>
                <iframe title="Radheshyam Prabhu Website" className="iframe" src="http://radheshyamdas.com/" onClick={this.onIframeClick.bind(this)}>{/* HK3 !!!! */}
                    {/* <a href="http://radheshyamdas.com/"> RadheShyam PrabhuJi Lectures</a> */}
                </iframe>
            </div>
        )
    }
}