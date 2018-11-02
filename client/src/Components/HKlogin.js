import React,{Component} from "react";
import "../assets/css/stylesheet.css"

export default class HKLoginPage extends Component{
    componentDidMount(){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("HKheaderusericon");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
            if(event.target!==document.getElementById("dropdownbutton")){
                document.getElementById("dropdown-menu").style.display="none"
            }
        }



        /* //Make the DIV element draggagle:
        dragElement(document.getElementById("myModal"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById("modal-content")) {
                //if present, the header is where you move the DIV from:
                document.getElementById("modal-content").onmousedown = dragMouseDown;
            } else {
                //otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                //stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        } */



        window.onload = addListeners;

        function addListeners(){
            document.getElementById('modal-content').addEventListener('mousedown', mouseDown, false);
            window.addEventListener('mouseup', mouseUp, false);

        }

        function mouseUp()
        {
            window.removeEventListener('mousemove', divMove, true);
        }

        function mouseDown(e){
        window.addEventListener('mousemove', divMove, true);
        }

        function divMove(e){
            var div = document.getElementById('modal-content');
            div.style.position = 'absolute';
            div.style.top = e.clientY + 'px';
            div.style.left = e.clientX + 'px';
        }
    }
    
    render(){
        return(
            <div id="myModal" className="modal">
                {/* HK !!!! HB !!!! */}
                <div draggable="true" id="modal-content" className="modal-content">
                    <span className="close">&times;</span>
                    {/* <p>HK !!!! HB !!!!</p> */}
                    <form id="loginform" action="/loginUser">
                        <p>Login : </p>
                        <table>
                            <tbody>
                                <tr><td>username :</td><td><input name="username" type="text"></input></td></tr>
                                <tr><td>password :</td><td><input name="password" type="text"></input></td></tr>
                                <tr><td><input type="submit" value="submit"></input></td></tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>
        )
    }
}