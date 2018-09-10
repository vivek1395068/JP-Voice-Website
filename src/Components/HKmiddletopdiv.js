import React from "react";
import "../assets/css/stylesheet.css";


export default class HKmiddletopdiv extends React.Component {
    constructor(){
        super()
        this.state={
            LordImages:[]
        }
    }

    HKimageno=0;

    setInterval=null;

    setIntervalFunc(){
        this.setInterval=setInterval(()=>{
            if(this.HKimageno< (this.state.LordImages.length -1)){
                this.HKimageno++
                document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
            } else if(this.HKimageno===(this.state.LordImages.length-1)){
                this.HKimageno=0;
                document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
            }
        },5000)
    }

    HKmiddletopdivrightpOnClick(){
        if(this.HKimageno< (this.state.LordImages.length -1)){
            this.HKimageno++
            document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
        } else if(this.HKimageno===(this.state.LordImages.length-1)){
            this.HKimageno=0
            document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
        }
        clearInterval(this.setInterval);
        this.setIntervalFunc();
    }

    HKmiddletopdivleftpOnClick(){
        if(this.HKimageno>0){
            this.HKimageno--
            document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
        } else if(this.HKimageno===0){
            this.HKimageno=this.state.LordImages.length -1
            document.getElementById("displayImg").setAttribute("src",this.state.LordImages[this.HKimageno]);
        }
        clearInterval(this.setInterval);
        this.setIntervalFunc();
    }
    componentWillMount(){
        var funcScope=this;
        var req = require.context("../assets/img", false, /.*\.jpg$/);
        req.keys().forEach(function(key){
            funcScope.state.LordImages.push(req(key))
        });
    }

    componentDidMount(){
        this.setIntervalFunc();
    }
    render(){
        return (
            <div id="HKmiddletopdiv">
                <div>{/* HK5 !!!! */}
                <p id="HKmiddletopdivleftp" onClick={this.HKmiddletopdivleftpOnClick.bind(this)}>{"<"}{/* HK !!!! */}</p>
                    <img alt="" id="displayImg" src={this.state.LordImages[this.HKimageno]}></img>
                    <p id="HKmiddletopdivrightp" onClick={this.HKmiddletopdivrightpOnClick.bind(this)}>{/* HK !!! */}></p>
                </div>
            </div>
        )
    }
}