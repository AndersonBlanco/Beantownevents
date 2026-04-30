// page made by Sara execept for wrapped curly brackets function Logic, inclduing raw images and sources, context/content of the page.  
// The deisgn and general logic is by Sara. The useEffect and the impoortation of the reosurces, vvariable creation ofo Timeline, useState variables, and <Image tag were done by Anderson. 
/// The rest of the body is done by Sara

"use client"; 
//import Celebration250Logic from "./logic";



import "./timeline.css"
import "./calendar-250th.css"
//import "./celebration_250th.css"
import Script from "next/script";

import { useEffect, useState } from "react";


import {openPopupBattle, openPopupHarbor, openPopupPaul, openPopupTea, closePopup, setVariables} from "./popup"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Harbor from "./src/harbor.jpg"
import Tea from "./src/tea.jpg"
import Horse from "./src/horse.jpg"
import Lexington from "./src/lexington.jpg"
import Image from "next/image";
import { Logic } from "./logic";

export default function Page(){ 
    const path = usePathname(); 
    
    useEffect(() =>{
 
        Logic()
        setVariables()
    })

    const TimeLine = (

            <div id="page-wrapper-usa">
                <div id="box">
                    <h1 id="main-title">Boston's 250th Anniversary Celebration</h1>

                    <p id="main-subtitle">
                        Celebrate 250 years of history in Boston with a summer full of unforgettable
                        events. From immersive reenactments and waterfront festivals to live performances and
                        historical tours. Whether you want to celebrate your home state, are a
                        history lover, or just looking for something fun to do, Boston's 250th anniversary
                        celebration offers something for everyone. Join us and experience the spirit of
                        1776 in the place where it all began.
                    </p>

                    <div id="instruct">
                        <p className="instructions">
                            Click The See More Button on Any Event to Learn More!
                        </p>
                        <p className="instructions">
                            Click The Date on Any Event to Save To Your Google Calendar!
                        </p>
                    </div>

                    <div id="timeline-wrapper-usa">
                        {/* &#9650; and &#9660; are HTML entities for triangle characters.
                             From W3Schools: https://www.w3schools.com/html/html_entities.asp */}


                        <div className="timeline-usa" id = "timeline-usa">
                            <div id="inside">
                                <div className="container-usa left-usa">
                                    <div className="content-usa">
                                        <h2>
                                            <a onClick = {() => set_celeb_content(!celeb_content)}>September 14th, 1716</a>
                                        </h2>
                                        <p>Boston Lighthouse Cruises &amp; the 250th Anniversary of Siege of Boston</p>
                                        <Image className="left" src={Harbor} alt="250th Celebration"/>
                                        <button className="pop-btn-usa" id="harbor-btn-usa" onClick={() => openPopupHarbor()}>See
                                            More
                                        </button>
                                    </div>
                                </div>
                                <div className="container-usa right-usa">
                                    <div className="content-usa">
                                        <h2>
                                            <a onClick = {() => set_celeb_content(!celeb_content)}>December 16th, 1773</a>
                                        </h2>
                                        <p>Boston Tea Party Tea Blending Activations</p>
                                        <Image className="right" src={Tea} alt="250th Celebration"/>
                                        <button className="pop-btn-usa" id="tea-btn-usa" onClick={() => openPopupTea()}>See More
                                        </button>
                                    </div>
                                </div>
                                <div className="container-usa left-usa">
                                    <div className="content-usa">
                                        <h2>
                                            <a onClick = {() => set_celeb_content(!celeb_content)}>April 18th, 1775</a>
                                        </h2>
                                        <p>Paul Revere's Ride Reenactment</p>
                                        <Image className="left" src={Horse} alt="250th Celebration"/>
                                        <button className="pop-btn-usa" id="paul-btn-usa" onClick={() => openPopupPaul()}>See More
                                        </button>
                                    </div>
                                </div>
                                <div className="container-usa right-usa">
                                    <div className="content-usa">
                                        <h2>
                                            <a onClick = {() => set_celeb_content(!celeb_content)}>April 19th, 1775</a>
                                        </h2>
                                        <p>251st Anniversary of the Battle of Lexington Patriots' Day Brunch</p>
                                        <Image className="right" src={Lexington} alt="250th Celebration"/>
                                        <button className="pop-btn-usa" id="battle-btn-usa" onClick={() => openPopupBattle()}>See
                                            More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WRAPPER - Background overlay of popup + all popup panels */}
                    <div id="wrapper-usa">

                        <div id="popup-paul-usa" className="popup-box-usa">
                            <button onClick={() => closePopup()} className="close-popup-btn-usa">Close</button>
                            <div className="inner-usa">
                                <div className="inner-head-usa">
                                    <h3 className="pop-title-usa">Paul Revere's Ride Reenactment</h3>
                                </div>
                                <div className="pop-body-usa">
                                    <p>
                                        Lexington was getting ready for a fight even before British troops showed up
                                        on April 19, 1775. That night, Paul Revere and William Dawes,
                                        both members of the Sons of Liberty—rode quickly out of Boston and reached
                                        the town just before midnight. They went to the home of Jonas Clarke,
                                        who was related to John Hancock, to warn him and Samuel Adams that British
                                        forces were on their way. You can start your Patriots' Day bright and
                                        early by watching their arrival and the moment the warning is given in
                                        Lexington. There will be a live reenactment, including real horses, to
                                        bring the scene to life. This event is organized in partnership with the
                                        Lexington Minute Men. Keep in mind that Hancock Street will be closed
                                        before the event, and there won't be parking available nearby. It's best to
                                        park at 57 Bedford Street.
                                    </p>
                                    <hr/>
                                    <p className="click-address">Click the address to see how close you are!</p>
                                    <ul>
                                        <li>Date: April 17, 2026</li>
                                        <li>
                                            Location: <a
                                            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRirAtIBBzI1N2owajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYm3vULXneOJMZBuKVSUny5H&daddr=36+Hancock+St,+Lexington,+MA+02420"
                                            target="_blank">
                                            Hancock-Clarke House, 36 Hancock Street, Lexington, MA</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="popup-tea-usa" className="popup-box-usa">
                            <button onClick={() => closePopup()} className="close-popup-btn-usa">Close</button>
                            <div className="inner-usa">
                                <div className="inner-head-usa">
                                    <h3 className="pop-title-usa">Boston Tea Party Tea Blending Activations</h3>
                                </div>
                                <div className="pop-body-usa">
                                    <p>
                                        Curio Spice Co can come to your event, office, or venue and set up a visually
                                        stunning, spice market–inspired tea bar. They provide a variety of tea bases
                                        along with herbs, spices, dried fruits, flowers, and other botanical, and guide
                                        guests through creating their own custom tea blends. Each person leaves with
                                        a glass jar of their personalized loose-leaf tea, plus a Tea & Spice Pairing
                                        Wheel. Designed to run smoothly over 2–3 hours, this experience works great as
                                        an add-on to events like cocktail receptions, dinner parties, watch parties, or
                                        workplace lunches.
                                    </p>
                                    <hr/>
                                    <p className="click-address">Click the address to see how close you are!</p>
                                    <ul>
                                        <li>Date: April 6, 2026</li>
                                        <li>Location:
                                            <a href="https://www.google.com/maps/dir//Curio+Spice+Co+2265+Massachusetts+Avenue+Cambridge+MA+02140"
                                               target="_blank">
                                                Curio Spice Co, 2265 Massachusetts Avenue, Cambridge, MA 02140</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="popup-battle-usa" className="popup-box-usa">
                            <button onClick={() => closePopup()} className="close-popup-btn-usa">Close</button>
                            <div className="inner-usa">
                                <div className="inner-head-usa">
                                    <h3 className="pop-title-usa">251st Anniversary of the Battle of Lexington Patriots'
                                        Day Brunch</h3>
                                </div>
                                <div className="pop-body-usa">
                                    <p>
                                        Located in historic Lexington, MA -- birthplace of American liberty -- the Inn
                                        at Hastings Park, Boston area's only Relais & Châteaux property,
                                        sits steps from the Lexington Battle Green where the "shot heard 'round the
                                        world" ignited the American Revolution. On this day celebrating the
                                        251st Anniversary of the Battle of Lexington, Town Meeting Bistro, inspired
                                        by New England's revolutionary-era town meetings, will be offering a
                                        special breakfast/brunch buffet. Available after the early morning Battle
                                        of Lexington reenactment on historic Lexington Green and before the Town of
                                        Lexington's Patriots' Day parade. 6:00 am - 3:00 pm. Adults $75 (includes
                                        appetizer and dessert buffet plus choice of one entrée and mimosa or sparkling
                                        wine); Children 4-12 $40; Ages 3 and under free (plus tax & gratuity).
                                    </p>
                                    <hr/>
                                    <p className="click-address">Click the address to see how close you are!</p>
                                    <ul>
                                        <li>Date: April 18, 2026</li>
                                        <li>Location:
                                            <a href="https://www.google.com/maps/dir//Inn+at+Hastings+Park+2027+Massachusetts+Avenue+Lexington,+MA+02421/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e39dd27c9623ef:0xa257b1d1b8e3c72f?sa=X&ved=1t:155782&ictx=111"
                                               target="_blank">
                                                Inn at Hastings, 2027 Massachusetts Avenue, Lexington, MA 02421</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="popup-harbor-usa" className="popup-box-usa">
                            <button onClick={() => closePopup()} className="close-popup-btn-usa">Close</button>
                            <div className="inner-usa">
                                <div className="inner-head-usa">
                                    <h3 className="pop-title-usa">Boston Lighthouse Cruises &amp; 250th Anniversary of
                                        Siege of Boston</h3>
                                </div>
                                <div className="pop-body-usa">
                                    <p>
                                        From the country's oldest lighthouse to the world's oldest commissioned
                                        warship afloat and everything in between, you'll see and hear about it all on
                                        this unique Lighthouses and Tales of Boston Harbor 90-minute cruise through
                                        Boston Harbor's history and present day. We'll journey up close for photo
                                        ops of Boston Light, originally built in 1716, and Long Island Headlight, with
                                        two additional lighthouse views. We'll sail past historic forts, learn
                                        about how Boston built the land upon which it sits, the bridges that span
                                        the rivers that flow into the harbor, view the Boston Harbor Islands, and more.
                                        This historical cruise is hosted by Boston area raconteur, David Coffin, who
                                        has been leading Boston Harbor tours since 2000. He is also well known as a
                                        chanty singer so you never know what might happen on any given tour!
                                    </p>
                                    <hr/>
                                    <p className="click-address">Click the address to see how close you are!</p>
                                    <ul>
                                        <li>Date: May 14, 2026</li>
                                        <li>Location:
                                            <a href="https://www.google.com/maps/dir//1+Long+Wharf,+Boston,+MA+02110/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37087ee430f63:0x9d585dc75604fe20?sa=X&ved=1t:707&ictx=111"
                                               target="_blank"> 1 Long Wharf, Boston, MA 02110</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





    );

    const Calendar = (
      <>

      <div id = "calendar-cotainer">
                    <h1 id="calendar-cotainerh1">Add Event To Your Google Calendar!</h1>
                    {/* &#8617; HTML entity for a leftwards-arrow-with-hook character,
                         used here as a visual cue inside the "Go back" link.
                         From W3Schools: https://www.w3schools.com/charsets/ref_utf_arrows.asp */}
                    <h2 id="calendar-cotainerh2"><a onClick = {() => set_celeb_content(true)}>Go back &#8617;</a></h2>
                    <div id="tab-container">
    
                        <div id="paul-tab" className="calendar-tab">
                            <h3>Paul Revere's Ride Reenactment</h3>
                            <Image src={Horse} alt="Paul Revere's Ride Reenactment"/>
                            {/* <add-to-calendar-button> is a custom HTML element from the
                             website: "Add to Calendar Button" at (https://add-to-calendar-button.com/).
                             The library is loaded through the <script> tag at the bottom of <body>,
                             and it scans the page for any <add-to-calendar-button> tags and renders
                             a working calendar button in their place.
    
                             Each attribute (name, description, startDate, startTime, endTime, timeZone,
                             location, options, buttonStyle) is read by the library to fill in the
                             calendar event when the user clicks the button.
    
                             The same technique is used for every event tile/popup; only the attribute
                             values change to match the event. */}
                            <div className="button">
                                <add-to-calendar-button
                                    name="Paul Revere's Ride Reenactment"
                                    description="Let's Celebrate Boston!"
                                    startDate="2026-04-17"
                                    startTime="21:00"
                                    endTime="23:00"
                                    timeZone="America/New_York"
                                    location="Hancock-Clarke House, 36 Hancock Street, Lexington, MA"
                                    options="'Google'"
                                    buttonStyle="default"
                                ></add-to-calendar-button>
                            </div>
                        </div>
    
                        <div id="tea-tab" className="calendar-tab">
                            <h3>Boston Tea Party Tea Blending Activations</h3>
                            <Image src={Tea} alt="Boston Tea Party Tea Blending Activations"/>
                            {/* Third-partyAdd to Calendar Button. See full explanation above the first
                                event tile. Library docs: https://add-to-calendar-button.com/ */}
                            <div className="button">
                                <add-to-calendar-button
                                    name="Boston Tea Party Tea Blending Activations"
                                    description="Let's Celebrate Boston!"
                                    startDate="2026-04-06"
                                    startTime="09:00"
                                    endTime="12:00"
                                    timeZone="America/New_York"
                                    location="2265 Massachusetts Avenue, Cambridge, MA 02140"
                                    options="'Google'"
                                    buttonStyle="default"
                                ></add-to-calendar-button>
                            </div>
                        </div>
    
                        <div id="lexington-tab" className="calendar-tab">
                            <h3>251st Anniversary of the Battle of Lexington Patriots' Day Brunch</h3>
                            <Image src={Lexington} alt="Battle of Lexington Patriots' Day Brunch"/>
                            {/* Third-party Add to Calendar Button. See full explanation above the first
                                event tile. Library docs: https://add-to-calendar-button.com/ */}
                            <div className="button">
                                <add-to-calendar-button
                                    name="251st Anniversary of the Battle of Lexington Patriots' Day Brunch"
                                    description="Let's Celebrate Boston!"
                                    startDate="2026-04-18"
                                    startTime="06:00"
                                    endTime="15:00"
                                    timeZone="America/New_York"
                                    location="2027 Massachusetts Avenue, Lexington, MA 02421"
                                    options="'Google'"
                                    buttonStyle="default"
                                ></add-to-calendar-button>
                            </div>
                        </div>
    
                        <div id="harbor-tab" className="calendar-tab">
                            <h3>Boston Lighthouse Cruises &amp; 250th Anniversary of Siege of Boston</h3>
                            <Image src={Harbor} alt="Boston Lighthouse Cruises"/>
                            {/* Third-party Add to Calendar Button. See full explanation above the first
                                event tile. Library docs: https://add-to-calendar-button.com/ */}
                            <div className="button">
                                <add-to-calendar-button
                                    name="Boston Lighthouse Cruises & 250th Anniversary of Siege of Boston"
                                    description="Let's Celebrate Boston!"
                                    startDate="2026-05-14"
                                    startTime="10:00"
                                    endTime="12:30"
                                    timeZone="America/New_York"
                                    location="1 Long Wharf, Boston, MA 02110"
                                    options="'Google'"
                                    buttonStyle="default"
                                ></add-to-calendar-button>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>

                </>)





      const [celeb_content, set_celeb_content] = useState(true); 



    return <>
    {celeb_content ? TimeLine : Calendar}
    </>
    
}
