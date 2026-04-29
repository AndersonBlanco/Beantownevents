'use client';
import "../museumevents.css"
import "../../index.css"
import {Museums_logic, plusSlides, currentSlide, } from "./museums_events";
import { useEffect } from "react"
import Image from "next/image";
import OutsideFacadeMFA from "../src/MFA.jpg"
import ISG from "../src/ISGEvent.jpg"
import HAM from "../src/HAMEvent.jpg"
import ICA from "../src/ICAEvent.jpg"
import BostonCommon from "../src/BostonCommon.jpg"
import eljaleo from "../src/eljaleo.jpg"
import MFA from "../src/MFAEvent.jpg"
import train from "../src/train.jpg"
import Link from "next/link";

export default function Museums_Events(){

      useEffect(() =>{
        Museums_logic(); 
    })

    return(
        <div id="main-museums-events">
    <h2 className="museum-heading-museums">Events at Museums in Boston: April</h2>
  <Link href="/events/museums" className="button-museums">Back to Museums</Link>
  <div id="frames-museums">
    <div id="MFA-museums">
      <h3 className="museum-heading-museums">Museum of Fine Arts, Boston</h3>
      <a href="https://www.mfa.org/"><Image  src={MFA} alt="An MFA tour guide speaks to a tour group about
      Norval Morrisseau's Bear Father, Bear Son" className="museum-photo-museums"/></a>
      <button type="button" className="collapsible-museums">Upcoming!</button>
      <div className="content-museums">
        <br/>
        <p>4/9: Conservators in Action. 10:00 am-12:00 pm</p><br/>
        <p>4/10: Wicked Queer: Boston's LGBTQ+ Film Festival</p><br/>
        <p>Every Thursday: Gallery Highlights. 12:00 pm-1:00 pm & 2:00 pm-3:00 pm</p><br/>
        <p>Every Thursday: Boston Stories. 1:00 pm-2:00 pm</p><br/>
        <a href="https://www.mfa.org" className="button-two-museums">Museum's Website</a>
      </div>
    </div>

    <div id="ISG-museums">
      <h3 className="museum-heading-museums">Isabella Stewart Gardner</h3>
      <a href="https://www.gardnermuseum.org/"><Image  src={ISG} alt="The hanging Nasturtiums, bright orange flowers" className="museum-photo-museums"/></a>
      <button type="button" className="collapsible-museums">Upcoming!</button>
      <div className="content-museums">
        <br/>
        <p>4/10: Botanical Talk & Tour. 12:30 pm</p><br/>
        <p>4/11: Saturday Open Studios. 1-4 pm</p><br/>
        <p>4/12: Randall Goosby and Zhu Wang Concert. 1:30-3:30 pm</p><br/>
        <p>4/16: Studio Workshop: Portraiture with Evoke Tintype. 5-9 pm</p><br/>
        <a href="https://www.gardnermuseum.org/" className="button-two-museums">Museum's Website</a>
      </div>
    </div>

    <div id="HAM-museums">
      <h3 className="museum-heading-museums">Harvard Art Museums</h3><br/>
      <a href="https://harvardartmuseums.org/"><Image  src={HAM} alt="A woman reads to a group of children and caregivers in front of a glass window in a museum." className="museum-photo-museums"/></a>
      <button type="button" className="collapsible-museums">Upcoming!</button>
      <div className="content-museums">
        <br/>
        <p>4/10: John La Farge's Designs for Trinity Church @ 150. 11:00-12:00 pm</p><br/>
        <p>4/11: Daylong Symposium: Celtic Art Up Close. 10:30 am-4:00 pm</p><br/>
        <p>4/11: Second Saturdays Story Time. 11-11:30 am</p><br/>
        <p>4/12: Materials Lab Workshop: Ancient Graphite-Decorated Pottery. 10 am-1 pm</p><br/>
        <a href="https://harvardartmuseums.org" className="button-two-museums">Museum's Website</a>
      </div>
    </div>

    <div id="ICA-museums">
      <h3 className="museum-heading-museums">Institute of Contemporary Art</h3>
      <a href="https://www.icaboston.org/"><Image  src={ICA} alt="Students dancing at the ICA under pink lighting" className="museum-photo-museums"/></a>
      <button type="button" className="collapsible-museums">Upcoming!</button>
      <div className="content-museums">
        <br/>
        <p>4/10: Teen Gallery Opening: Sonder. 6-8 pm</p><br/>
        <p>4/11: <i>To My Best Friend</i> Exhibition Tour. 2:30 pm</p><br/>
        <p>4/12: Boston Family Days. 10 am-5 pm</p><br/>
        <p>4/14: Opening Reception: <i>Derrick Adams: View Master</i>. 7-9 pm</p><br/>
        <a href="https://www.icaboston.org" className="button-two-museums">Museum's Website</a>
      </div>
    </div>
  </div>

        </div>
    )
}
