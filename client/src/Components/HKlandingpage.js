import React, { Component } from 'react';
import HKheader from "./HKheader";
import HKleftTab from "./HKleftTab";
import HKlefttopdiv from "./HKlefttopdiv";
import HKleftbottomdiv from "./HKleftbottomdiv";
import HKmiddletopdiv from "./HKmiddletopdiv";
import HKmiddlecentrediv from "./HKmiddlecentrediv";
import HKmiddlebottomdiv from "./HKmiddlebottomdiv";
import HKrighttopdiv from "./HKrighttopdiv";
import HKrightbottomdiv from "./HKrightbottomdiv";
import HKinfoboxtop from "./HKinfoboxtop";
import HKinfoboxmiddle from "./HKinfoboxmiddle";
import HKinfoboxbottom from "./HKinfoboxbottom";
import HKLoginPage from "./HKlogin";
import '../assets/css/stylesheet.css';
import HKfooter from './HKfooter';

class HKlandingpage extends Component {
  render() {
    return (
      <div className="HKlandingpage">
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
        {<HKLoginPage/>}
      </div>
    );
  }
}

export default HKlandingpage;
