import React, { Component } from 'react';
import HKheader from "./Components/HKheader";
import HKleftTab from "./Components/HKleftTab";
import HKlefttopdiv from "./Components/HKlefttopdiv";
import HKleftbottomdiv from "./Components/HKleftbottomdiv";
import HKmiddletopdiv from "./Components/HKmiddletopdiv";
import HKmiddlecentrediv from "./Components/HKmiddlecentrediv";
import HKmiddlebottomdiv from "./Components/HKmiddlebottomdiv";
import HKrighttopdiv from "./Components/HKrighttopdiv";
import HKrightbottomdiv from "./Components/HKrightbottomdiv";
import HKinfoboxtop from "./Components/HKinfoboxtop";
import HKinfoboxmiddle from "./Components/HKinfoboxmiddle";
import HKinfoboxbottom from "./Components/HKinfoboxbottom";
import './App.css';
import HKfooter from './Components/HKfooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HKheader/>
        <HKleftTab/>
        <HKlefttopdiv/>
        <HKleftbottomdiv/>
        <HKmiddletopdiv/>
        <HKmiddlecentrediv/>
        <HKmiddlebottomdiv/>
        <HKrighttopdiv/>
        <HKrightbottomdiv/>
        <HKinfoboxtop/>
        <HKinfoboxmiddle/>
        <HKinfoboxbottom/>
        <HKfooter/>
      </div>
    );
  }
}

export default App;
