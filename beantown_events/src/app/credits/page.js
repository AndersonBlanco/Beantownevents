//Everyhting in this file is done by All 

"use client"; 
import Image from "next/image"
import "./credits.css"
import credits_logic from "./credits"
import { useEffect } from "react"

const ccIconStyle = {
    maxWidth: "1em",
    maxHeight: "1em",
    marginLeft: ".2em",
}

function ccIcon(name) { //Anderson made a function to for the copy-right images so its re-usable across all pages. However, Jackson searched the icon sources 
    return (
        <Image
            src={`https://mirrors.creativecommons.org/presskit/icons/${name}`}
            alt=""
            width={16}
            height={16}
            style={ccIconStyle}
            unoptimized
        />
    )
}

export default function Credits() {
    useEffect(() =>{ // Anderson useEffect implemented here to execute and apply the js logic after the DOM loads an dthe html fully loads 
        credits_logic();   //execuitng the js logic 
    }, [])
    return (
            <div id="main-credits">
                    <div id="credits-banner-credits">
            <h2 id="credits-title-credits">Site Credits</h2>
            <div id="underline-credits"></div>
            <p id="credits-intro-credits">All images, media, and resources used across Beantown Events</p>
        </div>


            {/*   GENERAL SITEWIDE CREDITS   */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-general-credits">General Across All Pages &#9662;</button>

                <div className="credits-content-credits" id="content-general-credits">
                    <ul className="credit-list-credits">
                        <li>The photo of the <a href="../src/logo-light.jpg"> Light Beantown Events logo</a>
                            on all pages is provided by <a href="https://quinntessentialism.cargo.site">Quinn Whitney</a>
                            is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                        </li>
                        <li>
                            The photo of the <a href="../src/logo-dark.jpg"> Dark Beantown Events logo</a>
                            on all pages is provided by <a href="https://quinntessentialism.cargo.site">Quinn Whitney</a>
                            is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                        </li>
                  
                    </ul>
                </div>
            </div>
            {/*   CONTACT US CREDITS   */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-contact-credits">Contact Us Page &#9662;</button>

                <div className="credits-content-credits" id="content-contact-credits">

                    {/* Sara START */}
                    <ul className="credit-list-credits">
                        <li>
                            The Photo of the <a href="https://pixabay.com/photos/boston-skyline-coast-summer-3690818/"> Boston Skyline</a>
                            in the Contact Us Page Is Provided By <a href="https://pixabay.com/users/usmc0491-3856099/"> usmc0491</a>
                            Under the Pixabay Free Use <a href="https://pixabay.com/service/license-summary/"> Content License</a>
                        </li>
                    </ul>
                    {/* Sara END */}

                </div>
            </div>

            {/*   CONCERTS PAGE CREDITS   */}
            {/* &reg; is the HTML entity for the registered trademark symbol (®). */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-concerts-credits">Concerts Page &#9662;</button>

                <div className="credits-content-credits" id="content-concerts-credits">

                    {/* Jackson START */}

                    <ul className="credit-list-credits">
                        <li>
                            The photo of <a href="https://unsplash.com/photos/grayscale-photo-of-man-in-white-shirt-and-black-shorts-o93itldbEPs">J. Cole</a>
                            in the Concerts Page is provided by <a href="https://unsplash.com/@leo_visions_"> Leo_Visions</a>
                            under the <a href="https://unsplash.com/license"> Upsplash Free Use License</a>
                        </li>
                        <li>
                            The photo of <a href="https://www.flickr.com/photos/lunchboxstudios/12779878355/in/album-72157641531951474"> The Fray</a>
                            in the Concerts Page is provided by <a href="https://www.flickr.com/photos/lunchboxstudios/"> Lunchbox LP</a>
                            under a <a href="https://creativecommons.org/licenses/by/2.0/deed.en"> CC BY 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                        </li>
                        <li>
                            The photo of <a href="https://www.flickr.com/photos/nrk-p3/54106057382/in/photolist-2qvyLsS-2qrgsoy-2qraFQj-2o4obMW-2pWJUF4-2pWJmFg-2pWJkTz-2pWHfgH-2pWJkPG-2pWCqiH-2pWHfmY-2pWCqZx-2pWHfRL-2pWJmsA-2pWJmvg-2pWHfnz-2pWCrbE-2pWJmr3-2rqtX7R-2pWCrbp-2rwG3Qg-2q39435-2rw3oVW-2rqW2nL-2rqbU7e-2rVna39-2rujzq9-2rsUkKq-2rqPoWf-2rU3kPg"> Benson Boone</a>
                            in the Concerts Page is provided by <a href="https://www.flickr.com/photos/nrk-p3/"> NRK P3</a>
                            under a <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/deed.en"> CC BY-NC-SA 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("sa.svg")}
                        </li>
                        <li>
                            The photo of <a href="https://unsplash.com/photos/a-man-with-a-beard-playing-a-guitar-Svmi68elV-Q"> Zach Bryan</a>
                            in the Concerts Page is provided by <a href="https://unsplash.com/@blake_harbison"> Blake Harbison</a>
                            under the <a href="https://unsplash.com/license"> Upsplash Free Use License</a>
                        </li>
                        <li>
                            The photo of the TD Garden, Benson Boone <a href="../src/tdgarden-chart-boone.jpg"> seating chart</a>
                            in the Concerts Page is provided by <a href="https://www.ticketmaster.com/discover/boston?categoryId=KZFzniwnSyZfZ7v7nJ"> Ticketmaster <sup className="trademark-credits">&reg;</sup></a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of the TD Garden, J. Cole <a href="../src/tdgarden-chart-jcole.jpg"> seating chart</a>
                            in the Concerts Page is provided by <a href="https://www.ticketmaster.com/discover/boston?categoryId=KZFzniwnSyZfZ7v7nJ"> Ticketmaster <sup className="trademark-credits">&reg;</sup></a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of the Leader Bank Pavilion, The Fray <a href="../src/lbp-chart.jpg"> seating chart</a>
                            in the Concerts Page is provided by <a href="https://www.ticketmaster.com/discover/boston?categoryId=KZFzniwnSyZfZ7v7nJ"> Ticketmaster <sup className="trademark-credits">&reg;</sup></a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of the Gillette Stadium, Zach Bryan <a href="../src/gillette-chart.jpg"> seating chart</a>
                            in the Concerts Page is provided by <a href="https://www.ticketmaster.com/discover/boston?categoryId=KZFzniwnSyZfZ7v7nJ"> Ticketmaster <sup className="trademark-credits">&reg;</sup></a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of the <a href="../src/curtain-left-close.jpg"> Closed Curtain Left</a> and <a href="../src/curtain-right-close.jpg">Curtain Closed Right</a>
                            in the Concerts Intro Page is provided by <a href="https://gemini.google.com/"> Google Gemini AI Photo Creator</a> and was edited by Jackson Corey.
                            Usage subjust to <a href="https://policies.google.com/terms"> Google's Terms of Service</a>
                        </li>
                        <li>
                            The photo of the <a href="../src/curtain-left.jpg">Curtain Left</a> and <a href="../src/curtain-right.jpg">Curtain Right</a>
                            in the Concerts Intro Page is provided by <a href="https://gemini.google.com/"> Google Gemini AI Photo Creator</a> and was edited by Jackson Corey.
                            usage subjust to <a href="https://policies.google.com/terms"> Google's Terms of Service</a>
                        </li>
                        <li>
                            The photo of <a href="../src/concert-crowd-1.jpg"> Concert Crowd Number 1</a> <a href="../src/concert-crowd-2.jpg"> Concert Crowd Number 2</a> <a href="../src/concert-crowd-3.jpg"> Concert Crowd Number 3</a> <a href="../src/concert-crowd-4.jpg"> Concert Crowd Number 4</a>
                            in the Concerts Intro Page is provided by <a href="https://gemini.google.com/"> Google Gemini AI Photo Creator</a> and was edited by Jackson Corey.
                            usage subjust to <a href="https://policies.google.com/terms"> Google's Terms of Service</a>
                        </li>
                        <li>
                            The photo of the <a href="../src/valance-curtains.jpg"> Curtain Valance</a>
                            in the Concerts Intro Page is provided by <a href="https://gemini.google.com/"> Google Gemini AI Photo Creator</a> and was edited by Jackson Corey.
                            usage subjust to <a href="https://policies.google.com/terms"> Google's Terms of Service</a>
                        </li>
                        <li>
                            The photo of the <a href="../src/spot-light.jpg"> Spotlight</a>
                            in the Concerts Intro Page is provided by <a href="https://gemini.google.com/"> Google Gemini AI Photo Creator</a> and was edited by Jackson Corey.
                            usage subjust to <a href="https://policies.google.com/terms"> Google's Terms of Service</a>
                        </li>
                    </ul>

                    {/* Jackson END */}

                </div>
            </div>

            {/*   BOXING PAGE CREDITS   */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-boxing-credits">Boxing Page Credits &#9662;</button>

                <div className="credits-content-credits" id="content-boxing-credits">
                    {/* Anderson START */}
                    <ul className="credit-list-credits">
                        <li>
                            The image of <a href="https://www.nationalsilvergloves.org/wp-content/uploads/2025/12/2026_boxing_silver_gloves-m.pdf">New England Silver Gloves Youth Bracket</a>
                            in the Boxing Page is provided by <a href="https://www.nationalsilvergloves.org/"> National Silver Gloves</a>
                        </li>
                        <li>
                            The image of <a href="https://pagoldengloves.org/wp-content/uploads/2024/02/2024-GG-Fact-Sheet-1.pdf">Mid-Atlantic Golden Gloves Fall Pro Card</a>
                            in the Boxing Page is provided by <a href="https://www.goldenglovesusa.org/"> Golden Gloves of America</a>
                        </li>
                        <li>
                            The image of <a href="https://www.nationalsilvergloves.org/wp-content/uploads/2025/12/2026_boxing_silver_gloves-m.pdf">Southeast Collegiate Team Dual classNameic</a>
                            in the Boxing Page is provided by <a href="https://www.nationalsilvergloves.org/"> National Silver Gloves</a>
                        </li>
                        <li>
                            The image of <a href=""> Great Lakes Championship Night</a>
                            in the Boxing Page is provided by <a href=""> Miami of Ohio</a>
                        </li>
                        <li>
                            The image of <a href="">West Coast Proving Grounds</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> International Amateur Exchange Showcase</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> New England Golden Gloves Qualifier</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> Mid-Atlantic Masters Evening Card</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> Southeast Youth Development Festival</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> Great Lakes Silver Gloves Juniors</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> West Coast Collegiate Invitational Duals</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                        <li>
                            The image of <a href=""> International Golden Gloves Championship Series</a>
                            in the Boxing Page is provided by <a href=""> </a>
                        </li>
                    </ul>
                    {/* Anderson END */}

                </div>
            </div>

            {/*   250th ANNIVERSARY PAGE CREDITS   */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-250th-credits">250th Anniversary Page Credits &#9662;</button>

                <div className="credits-content-credits" id="content-250th-credits">

                    {/* Sara START */}
                    <ul className="credit-list-credits">
                        <li>
                            The image of a <a href="https://www.flickr.com/photos/oldsaleminc/28872350330">carriage</a>
                            in the 250th Anniversary Page is provided by <a href="https://www.flickr.com/photos/oldsaleminc/">Old Salem Inc.</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/deed.en"> CC BY-NC-ND 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The image of a <a href="https://www.flickr.com/photos/boscdanjou/49851998968">horse</a>
                            in the 250th Anniversary Page is provided by <a href="https://www.flickr.com/photos/boscdanjou/">Bosc d'Anjou</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/deed.en"> CC BY-NC-ND 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose                        </li>
                        <li>
                            The image of a <a href="https://www.flickr.com/photos/ballookey/33809441">tea</a>
                            in the 250th Anniversary Page is provided by <a href="https://www.flickr.com/photos/ballookey/">Ballookey Klugeypop</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/deed.en"> CC BY-NC-ND 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose                        </li>
                        <li>
                            The image of a <a href="https://www.flickr.com/photos/joiseyshowaa/28288594445">harbor</a>
                            in the 250th Anniversary Page is provided by <a href="https://www.flickr.com/photos/joiseyshowaa/">B K (joiseyshowaa)</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/deed.en"> CC BY-NC-ND 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose                        </li>
                        <li>
                            The image of a <a href="https://www.flickr.com/photos/subhash_roy/54463226234">harbor</a>
                            in the 250th Anniversary Page is provided by <a href="https://www.flickr.com/photos/subhash_roy/">Subhash Roy</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/deed.en"> CC BY-NC-ND 2.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose                        </li>
                    </ul>
                    {/* Sara END */}

                </div>
            </div>

            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-museums-credits">Museums page Credits &#9662;</button>

                <div className="credits-content-credits" id="content-museums-credits">

                    {/* Quinn START */}

                    <ul className="credit-list-credits">
                        <li>
                            The photo of <a href="https://www.mfa.org/event/guided-tour/gallery-highlights?event=162731"> The MFA Boston</a>
                            in the Museums Page is provided by <a href="https://en.wikipedia.org/wiki/User:Alexf"> Alexf</a>
                            under a <a href="https://creativecommons.org/licenses/by/2.5/?ref=openverse."> CC BY 2.5.</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                        </li>
                        <li>
                            The photo of <a href="https://www.gardnermuseum.org/calendar"> The Isabella Stewart Gardner</a>
                            in the Museums Page is provided by <a href="https://commons.wikimedia.org/w/index.php?title=User:Amoran002&action=edit&redlink=1"> Amoran002</a>
                            under a <a href="https://creativecommons.org/licenses/by-sa/4.0"> CC BY-SA 4.0.</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("sa.svg")}
                        </li>
                        <li>
                            The photo of <a href="https://harvardartmuseums.org/calendar"> Harvard Art Museum</a>
                            in the Museums Page is provided by <a href="https://commons.wikimedia.org/wiki/User:Daderot"> Daderot</a>
                            under a <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en?ref=openverse.">CC0 1.0.</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("zero.svg")}
                        </li>
                        <li>
                            The photo of <a href="https://www.icaboston.org/calendar/"> Institute of Contemporary Art</a>
                            in the Museums Page is provided by <a href="https://openverse.org/image/collection?source=flickr&creator=bbaunach"> bbaunach</a>
                            under a <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0.</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                        </li>
                    </ul>
                    {/* Quinn END */}

                </div>
            </div>

            {/*   CLUBS PAGE CREDITS   */}
            <div className="credits-section-credits">
                <button className="collapsible-btn-credits" id="btn-clubs-credits">Clubs Page Credits &#9662;</button>

                <div className="credits-content-credits" id="content-clubs-credits">

                    {/* Yana START */}

                    <ul className="credit-list-credits">
                        <li>
                            The photo of <a href="https://bignightlive.com/private-events-overview"> Big Night Live</a>
                            in the Clubs Page is provided by <a href="https://bignightlive.com/private-events-overview"> Big Night Live</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of <a href="https://www.venuboston.com/wp-content/uploads/2020/01/Venu-001.jpg"> Venue Night Club</a>
                            in the Clubs Page is provided by <a href="https://www.venuboston.com/"> Venue Night Club</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of <a href="https://thegrandboston.com/contact"> The Grand Image</a>
                            in the Clubs Page is provided by <a href="https://thegrandboston.com/"> The Grand Boston</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                        <li>
                            The photo of <a href="https://maps.app.goo.gl/MMCU6Pb7EZBP4ST88"> The Icon Night Club</a>
                            in the Clubs Page is provided by <a href="https://www.iconnightclub.com/"> The Icon Night Club</a>
                            licenced under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"> CC BY-NC-ND 4.0</a>
                            {/*Anderson embedded icon from output of function */ccIcon("cc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("by.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nc.svg")}
                            {/*Anderson embedded icon from output of function */ccIcon("nd.svg")}
                            being used under U.S. Code<a href="https://www.law.cornell.edu/uscode/text/17/107"> 17 U.S.C. § 107</a> (Fair Use) — educational, non-commercial purpose
                        </li>
                    </ul>
                    {/* Yana END */}

                </div>
            </div>
        </div>

    )
}
