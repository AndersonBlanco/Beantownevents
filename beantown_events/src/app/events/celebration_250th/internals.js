"use client"; 

import "./groupproject.css"

import "./timeline.css"
import Harbor from "./src/harbor.jpg"
import Tea from "./src/tea.jpg"
import Horse from "./src/horse.jpg"
import Lexington from "./src/lexington.jpg"
import Image from "next/image";
import {openPopupBattle, openPopupHarbor, openPopupPaul, openPopupTea, closePopup} from "./popup"

export const GroupProject = (
    <div className = "timeline-container">
     <p>Celebrate 250 years of history in Boston with a summer full of unforgettable events honoring the American Revolution. From immersive
        reenactments and waterfront festivals to live performances and historical tours, the city will come alive in a tribute to its revolutionary
        roots. Whether you're a history lover or just looking for something fun to do, Boston’s 250th anniversary celebration offers something for
        everyone. Join us and experience the spirit of 1776 in the place where it all began.</p>
      <a href="groupprojectcredits.html"> </a>
      {/* <Image src="src/carriage.jpg" alt="250th Celebration"></a> */}
      <div className="timeline">                          {/* Got this information from w3 schools. It is making it so the boxes are stationed on either side of the line */}
        <div className="container left"> {/* positions items left on the timeline, controlled through css though */}
          <div className="content">{/* wraps each event's actual content boc */}
            <h2>
              <a href="groupproject4.html">September 14th, 1716</a>
            </h2>
            <p>Boston Lighthouse Cruises and the 250th Anniversary of Siege of Boston</p>
            <Image src={Harbor} alt="250th Celebration"/>    {/* I figured out how to add the images and place them to fit in the boxes nut i know that's css */}
            
            <button className="pop-btn" id="harbor-btn" onClick={() => openPopupHarbor()}>See More</button> {/* creates a clickable button. class is the styling hook, id is the unique identifier, and onClick links to the JavaScript funtion */}


          </div>


        </div>

        <div className="container right"> {/* positions items right on the timeline, controlled through css though */}
          <div className="content"> {/* wraps each event's actual content boc */}
            <h2>
              <a href="groupproject3.html">December 16th, 1773</a>
            </h2>
            <p>Boston Tea Party Tea Blending Activations</p>
            <Image src={Tea} alt="250th Celebration"/>
                             <button className="pop-btn" id="tea-btn" onClick={() => openPopupTea()}>See More</button> {/* creates a clickable button. class is the styling hook, id is the unique identifier, and onClick links to the JavaScript funtion */}

          </div>
        </div>
         
         
          <div className="container left"> {/* positions items left on the timeline, controlled through css though */}
            <div className="content"> {/* wraps each event's actual content boc */}
              <h2>
                <a href="groupproject2.html">April 18th, 1775</a>
              </h2>
              <p>Paul Revere’s Ride Reenactment</p>
              <Image src={Horse} alt="250th Celebration"/>
                                  <button className="pop-btn" id="paul-btn" onClick={() => openPopupPaul()}>See More</button> {/* creates a clickable button. class is the styling hook, id is the unique identifier, and onClick links to the JavaScript funtion */}

            </div>

          </div>
        <div className="container right"> {/* positions items right on the timeline, controlled through css though */}
          <div className="content"> {/* wraps each event's actual content boc */}
            <h2>
              <a href="groupproject5.html">April 19th, 1775</a>
            </h2>
            <p>251st Anniversary of the Battle of Lexington Patriots' Day Brunch</p>
            <Image src={Lexington} alt="250th Celebration"/>
                              <button className="pop-btn" id="battle-btn" onClick={() => openPopupBattle()}>See More</button> {/* creates a clickable button. class is the styling hook, id is the unique identifier, and onClick links to the JavaScript funtion */}

          </div>

        </div>                                          {/* end of w3 code */}
      </div>
     
      {/* WRAPPER - Background overlay of popup + all popup panels */}
      <div id="wrapper"> {/* overlay container for popups */}

        <div id="popup-paul" className="popup-box"> {/* hidden popup panel until triggered by JS */}
          <button onClick={() => closePopup()} className="close-popup-btn">Close</button> {/* closes popup box using the JavaScript funtion */}
          <div className="inner"> {/* main popup content container */}
            <div className="inner-head"> {/* header section inside the popup */}
              <h3 className="pop-title">Paul Revere’s Ride Reenactment</h3> {/* title of the popup's event */}
              {/* <p className="pop-subtitle">subtitle with info </p> */}
            </div>
            <div className="pop-body"> {/* main informational content area box */}
              {/* <h3> MAIN INFO STUFF</h3> */}
              <p>Lexington was getting ready for a fight even before British troops showed up on April 19, 1775. That night, Paul Revere and William Dawes,
                both members of the Sons of Liberty—rode quickly out of Boston and reached the town just before midnight. They went to the home of Jonas Clarke,
                who was related to John Hancock, to warn him and Samuel Adams that British forces were on their way. You can start your Patriots’ Day bright and
                early by watching their arrival and the moment the warning is given in Lexington. There will be a live reenactment, including real horses, to
                bring the scene to life. This event is organized in partnership with the Lexington Minute Men. Keep in mind that Hancock Street will be closed
                before the event, and there won’t be parking available nearby. It’s best to park at 57 Bedford Street. </p>
              <hr/>
                <hr/>
              <ul>
                {/* <li>Paul Revere’s Ride Reenactment</li> */}
                <li>Date: April 17, 2026</li>
                {/* <li>April 17, 2026</li> */}
                <li>Location: <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420">
                  Hancock-Clarke House, 36 Hancock Street, Lexington, MA</a></li>
                {/* <li><a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420">Hancock-Clarke House, 36 Hancock Street, Lexington, MA</a></li> */}
              </ul>
              {/* MAIN CONTENT HERE FOR THE POPUP */}
            </div>
          </div>
        </div>

        <div id="popup-tea" className="popup-box"> {/* hidden popup panel until triggered by JS */}
          <button onClick={() => closePopup()} className="close-popup-btn">Close</button> {/* closes popup box using the JavaScript funtion */}
          <div className="inner"> {/* main popup content container */}
            <div className="inner-head"> {/* header section inside the popup */}
              <h3 className="pop-title">Boston Tea Party Tea Blending Activations</h3> {/* title of the popup's event */}
              {/* <p className="pop-subtitle">subtitle with info about Tea</p> */}
            </div>
            <div className="pop-body"> {/* main informational content area box */}
              {/* <h3>MAIN INFO STUFF</h3> */}
              <p>Curio Spice Co can come to your event, office, or venue and set up a visually stunning, spice market–inspired tea bar.
                They provide a variety of tea bases along with herbs, spices, dried fruits, flowers, and other botanicals, and guide
                guests through creating their own custom tea blends. Each person leaves with a glass jar of their personalized loose-leaf
                tea, plus a Tea & Spice Pairing Wheel. Designed to run smoothly over 2–3 hours, this experience works great as an add-on to events
                like cocktail receptions, dinner parties, watch parties, or workplace lunches.</p>
              <hr/>
                <hr/>
              <ul>
                <li>Date: April 6, 2026</li>
                <li>Location:<a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420">
                  Curio Spice Co, 2265 Massachusetts Avenue, Cambridge, MA 02140</a></li>
              </ul>
              {/* MAIN CONTENT HERE FOR THE POPUP */}
            </div>
          </div>
        </div>

        <div id="popup-battle" className="popup-box"> {/* hidden popup panel until triggered by JS */}
          <button onClick={() => closePopup()} className="close-popup-btn">Close</button> {/* closes popup box using the JavaScript funtion */}
          <div className="inner"> {/* main popup content container */}
            <div className="inner-head"> {/* header section inside the popup */}
              <h3 className="pop-title">251st Anniversary of the Battle of Lexington Patriots’ Day Brunch</h3> {/* title of the popup's event */}
              {/* <p className="pop-subtitle">subtitle with info about Tea</p> */}
            </div>
            <div className="pop-body"> {/* main informational content area box */}
              {/* <h3>MAIN INFO STUFF</h3> */}
              <p>Located in historic Lexington, MA -- birthplace of American liberty -- the Inn at Hastings Park, Boston area's only Relais & Châteaux property,
                sits steps from the Lexington Battle Green where the "shot heard 'round the world" ignited the American Revolution. On this day celebrating the
                251st Anniversary of the Battle of Lexington, Town Meeting Bistro, inspired by New England's revolutionary-era town meetings, will be offering a
                special breakfast/brunch buffet.

                Available after the early morning Battle of Lexington reenactment on historic Lexington Green and before the Town of Lexington’s Patriots’ Day
                parade. 6:00 am - 3:00 pm. Adults $75 (includes appetizer and dessert buffet plus choice of one entrée and mimosa or sparkling wine); Children
                4-12 $40; Ages 3 and under free (plus tax & gratuity).</p>
              <hr/>
                <hr/>
              <ul>
                <li>Date: April 18, 2026</li>
                <li>Location:<a href="https://www.google.com/maps/dir//Inn+at+Hastings+Park+2027+Massachusetts+Avenue+Lexington,+MA+02421/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e39dd27c9623ef:0xa257b1d1b8e3c72f?sa=X&ved=1t:155782&ictx=111">
                  Inn at Hastings, 2027 Massachusetts Avenue, Lexington, MA 02421</a></li>
              </ul>
              {/* MAIN CONTENT HERE FOR THE POPUP */}
            </div>
          </div>
        </div>

        <div id="popup-harbor" className="popup-box"> {/* hidden popup panel until triggered by JS */}
          <button onClick={() => closePopup()} className="close-popup-btn">Close</button> {/* closes popup box using the JavaScript funtion */}
          <div className="inner"> {/* main popup content container */}
            <div className="inner-head"> {/* header section inside the popup */}
              <h3 className="pop-title">Boston Lighthouse Cruises and the 250th Anniversary of Siege of Boston</h3> {/* title of the popup's event */}
              {/* <p className="pop-subtitle">subtitle with info about Tea</p> */}
            </div>
            <div className="pop-body"> {/* main informational content area box */}
              {/* <h3>MAIN INFO STUFF</h3> */}
              <p>From the country's oldest lighthouse to the world's oldest commissioned warship afloat and everything in between, you'll see and hear about it all on
                this unique Lighthouses and Tales of Boston Harbor 90-minute cruise through Boston Harbor's history and present day.  We'll journey up close for photo
                ops of Boston Light, originally built in 1716, and Long Island Head Light, with two additional lighthouse views. We'll sail past historic forts, learn
                about how Boston built the land upon which it sits, the bridges that span the rivers that flow into the harbor, view the Boston Harbor Islands, and more.
                This historical cruise is hosted by Boston area raconteur, David Coffin, who has been leading Boston Harbor tours since 2000.  He is also well known as a
                chanty singer so you never know what might happen on any given tour!</p>
              <hr/>
                <hr/>
              <ul>
                <li>Date: May 14, 2026</li>
                <li>Location: <a href="https://www.google.com/maps/dir//1+Long+Wharf,+Boston,+MA+02110/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37087ee430f63:0x9d585dc75604fe20?sa=X&ved=1t:707&ictx=111">
                  1 Long Wharf, Boston, MA 02110</a></li>
              </ul>
              {/* MAIN CONTENT HERE FOR THE POPUP */}
            </div>
          </div>
        </div>


      </div>
      </div>
);


export const GroupProject2 = (
    <>
      <p>250th Anniversary Celebration here in Boston: Paul Revere's Ride Reenactment</p>

            <div className= "list-container">
                <ul>
                    <li>Paul Revere’s Ride Reenactment</li>
                    <li>Date:</li>
                    <li>April 17, 2026</li>
                    <li>Location:</li>
                    <li><a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420">Hancock-Clarke House, 36 Hancock Street, Lexington, MA</a></li>
                </ul></div>
                <p>Lexington was getting ready for a fight even before British troops showed up on April 19, 1775. That night, Paul Revere and William Dawes,
                    both members of the Sons of Liberty—rode quickly out of Boston and reached the town just before midnight. They went to the home of Jonas Clarke,
                    who was related to John Hancock, to warn him and Samuel Adams that British forces were on their way. You can start your Patriots’ Day bright and
                    early by watching their arrival and the moment the warning is given in Lexington. There will be a live reenactment, including real horses, to
                    bring the scene to life. This event is organized in partnership with the Lexington Minute Men. Keep in mind that Hancock Street will be closed
                    before the event, and there won’t be parking available nearby. It’s best to park at 57 Bedford Street.</p>
                <Image  className = "GroupX_Image" src={Horse} alt="250th Celebration"/>
    </>
)

export const GroupProject3 = (
    <>
     <p>250th Anniversary Celebration here in Boston: Boston Tea Party Tea Blending Activations</p>
  <div className= "list-container">
                <ul>
                    <li>Boston Tea Party Tea Blending Activations</li>
                    <li>Date:</li>
                    <li>April 6, 2026</li>
                    <li>Location:</li>
                    <li><a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420">
                        Curio Spice Co
                        2265 Massachusetts Avenue
                        Cambridge, MA 02140</a></li>
                </ul></div>
                <p>Curio Spice Co can come to your event, office, or venue and set up a visually stunning, spice market–inspired tea bar.
                    They provide a variety of tea bases along with herbs, spices, dried fruits, flowers, and other botanicals, and guide
                    guests through creating their own custom tea blends. Each person leaves with a glass jar of their personalized loose-leaf
                    tea, plus a Tea & Spice Pairing Wheel. Designed to run smoothly over 2–3 hours, this experience works great as an add-on to events
                    like cocktail receptions, dinner parties, watch parties, or workplace lunches.</p>
                <Image  className = "GroupX_Image"    src={Tea} alt="250th Celebration"/>

                </>
)


export const GroupProject4 = (
    <>
        <p>250th Anniversary Celebration here in Boston: Boston Lighthouse Cruises and the 250th Anniversary of Siege of Boston</p>
  <div className= "list-container">
            <ul>
                <li>Boston Lighthouse Cruises and the 250th Anniversary of Siege of Boston</li>
                <li>Date:</li>
                <li>May 14, 2026</li>
                <li>Location:</li>
                <li><a href="https://www.google.com/maps/dir//1+Long+Wharf,+Boston,+MA+02110/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37087ee430f63:0x9d585dc75604fe20?sa=X&ved=1t:707&ictx=111">
                    1 Long Wharf, Boston, MA 02110</a></li>
            </ul></div>
            <p>From the country's oldest lighthouse to the world's oldest commissioned warship afloat and everything in between, you'll see and hear about it all on
                this unique Lighthouses and Tales of Boston Harbor 90-minute cruise through Boston Harbor's history and present day.  We'll journey up close for photo
                ops of Boston Light, originally built in 1716, and Long Island Head Light, with two additional lighthouse views. We'll sail past historic forts, learn
                about how Boston built the land upon which it sits, the bridges that span the rivers that flow into the harbor, view the Boston Harbor Islands, and more.
                This historical cruise is hosted by Boston area raconteur, David Coffin, who has been leading Boston Harbor tours since 2000.  He is also well known as a
                chanty singer so you never know what might happen on any given tour! Show Less
            </p>
            <Image  className = "GroupX_Image"  src={Harbor} alt="250th Celebration"/>
            </>
)


export const GroupProject5 = (
    <>
       <p>250th Anniversary Celebration here in Boston: 251st Anniversary of the Battle of Lexington Patriots’ Day Brunch</p>
  <div className= "list-container">
            <ul>
                <li>251st Anniversary of the Battle of Lexington Patriots’ Day Brunch</li>
                <li>Date:</li>
                <li>April 18, 2026</li>
                <li>Location:</li>
                <li><a href="https://www.google.com/maps/dir//Inn+at+Hastings+Park+2027+Massachusetts+Avenue+Lexington,+MA+02421/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e39dd27c9623ef:0xa257b1d1b8e3c72f?sa=X&ved=1t:155782&ictx=111">
                    Inn at Hastings
                    2027 Massachusetts Avenue
                    Lexington, MA 02421</a></li>
            </ul></div>
            <p>Located in historic Lexington, MA -- birthplace of American liberty -- the Inn at Hastings Park, Boston area's only Relais & Châteaux property,
                sits steps from the Lexington Battle Green where the "shot heard 'round the world" ignited the American Revolution. On this day celebrating the
                251st Anniversary of the Battle of Lexington, Town Meeting Bistro, inspired by New England's revolutionary-era town meetings, will be offering a
                special breakfast/brunch buffet.

                Available after the early morning Battle of Lexington reenactment on historic Lexington Green and before the Town of Lexington’s Patriots’ Day
                parade. 6:00 am - 3:00 pm. Adults $75 (includes appetizer and dessert buffet plus choice of one entrée and mimosa or sparkling wine); Children
                4-12 $40; Ages 3 and under free (plus tax & gratuity).</p>
            <Image  className = "GroupX_Image"  src={Lexington} alt="250th Celebration"/>
   </>
)

