'use client';
import "../museumevents.css"
import "../../index.css"
import {Museums_logic, plusSlides, currentSlide, } from "./museums_events";
import { useEffect } from "react"
import Image from "next/image";
import OutsideFacadeMFA from "../src/MFA.jpg"
import ISG from "../src/ISG.jpg"
import HAM from "../src/HAM.jpg"
import ICA from "../src/ICA.jpg"
import BostonCommon from "../src/BostonCommon.jpg"
import eljaleo from "../src/eljaleo.jpg"
import MFA from "../src/MFAFrame.png"
import train from "../src/train.jpg"


export default function Museums_Events(){

      useEffect(() =>{
        Museums_logic(); 
    })

    return(
        <div className ="">
    <h2 className="museum-heading">Events at Museums in Boston: April</h2>
  <a href="museums.html" className="button">Back to Museums</a>
  <div id="frames">
    <div id="MFA">
      <h3 className="museum-heading">Museum of Fine Arts, Boston</h3>
      <a href="https://www.mfa.org/"><Image  src={MFA} alt="An MFA tour guide speaks to a tour group about
      Norval Morrisseau's Bear Father, Bear Son" className="museum-photo"/></a>
      <button type="button" className="collapsible">Upcoming!</button>
      <div className="content">
        <br/>
        <p>4/9: Conservators in Action. 10:00 am-12:00 pm</p><br/>
        <p>4/10: Wicked Queer: Boston's LGBTQ+ Film Festival</p><br/>
        <p>Every Thursday: Gallery Highlights. 12:00 pm-1:00 pm & 2:00 pm-3:00 pm</p><br/>
        <p>Every Thursday: Boston Stories. 1:00 pm-2:00 pm</p><br/>
        <a href="https://www.mfa.org" className="button-two">Museum's Website</a>
      </div>
    </div>

    <div id="ISG">
      <h3 className="museum-heading">Isabella Stewart Gardner</h3>
      <a href="https://www.gardnermuseum.org/"><Image  src={ISG} alt="The hanging Nasturtiums, bright orange flowers" className="museum-photo"/></a>
      <button type="button" className="collapsible">Upcoming!</button>
      <div className="content">
        <br/>
        <p>4/10: Botanical Talk & Tour. 12:30 pm</p><br/>
        <p>4/11: Saturday Open Studios. 1-4 pm</p><br/>
        <p>4/12: Randall Goosby and Zhu Wang Concert. 1:30-3:30 pm</p><br/>
        <p>4/16: Studio Workshop: Portraiture with Evoke Tintype. 5-9 pm</p><br/>
        <a href="https://www.gardnermuseum.org/" className="button-two">Museum's Website</a>
      </div>
    </div>

    <div id="HAM">
      <h3 className="museum-heading">Harvard Art Museums</h3><br/>
      <a href="https://harvardartmuseums.org/"><Image  src={HAM} alt="A woman reads to a group of children and caregivers in front of a glass window in a museum." className="museum-photo"/></a>
      <button type="button" className="collapsible">Upcoming!</button>
      <div className="content">
        <br/>
        <p>4/10: John La Farge's Designs for Trinity Church @ 150. 11:00-12:00 pm</p><br/>
        <p>4/11: Daylong Symposium: Celtic Art Up Close. 10:30 am-4:00 pm</p><br/>
        <p>4/11: Second Saturdays Story Time. 11-11:30 am</p><br/>
        <p>4/12: Materials Lab Workshop: Ancient Graphite-Decorated Pottery. 10 am-1 pm</p><br/>
        <a href="https://harvardartmuseums.org" className="button-two">Museum's Website</a>
      </div>
    </div>

    <div id="ICA">
      <h3 className="museum-heading">Institute of Contemporary Art</h3>
      <a href="https://www.icaboston.org/"><Image  src={ICA} alt="Students dancing at the ICA under pink lighting" className="museum-photo"/></a>
      <button type="button" className="collapsible">Upcoming!</button>
      <div className="content">
        <br/>
        <p>4/10: Teen Gallery Opening: Sonder. 6-8 pm</p><br/>
        <p>4/11: <i>To My Best Friend</i> Exhibition Tour. 2:30 pm</p><br/>
        <p>4/12: Boston Family Days. 10 am-5 pm</p><br/>
        <p>4/14: Opening Reception: <i>Derrick Adams: View Master</i>. 7-9 pm</p><br/>
        <a href="https://www.icaboston.org" className="button-two">Museum's Website</a>
      </div>
    </div>
  </div>

        </div>
    )
}