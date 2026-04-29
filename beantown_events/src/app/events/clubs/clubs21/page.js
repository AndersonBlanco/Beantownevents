//Yana
// All content if by Yana, except for the functions handleCheckout(..), usePathname(), the uri vairable, and thhe importation of the resources. 
//Everything else us by Yana, including the images sources, tetxual content, and general html tgas 

"use client"; 
import Image from "next/image";
import "../clubpages.css"

import VenuImage from "../src/venu.jpg"
import BngImage from "../src/bng.jpg"; 
import GrandImage from "../src/grand.jpg"; 
import IconImage from "../src/icon.jpg"; 


import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";
import { usePathname } from "next/navigation";
export default function Clubs21(){
	   const uri = "https://beantown-events.vercel.app/"
		  const path = usePathname(); 
	
 
    return(
        <div id="main-clubs">
		<h2 id="clubs-heading-clubs">21+ Club Events in Boston</h2>

		<div className="container-clubs">
			<div className="filterDiv-clubs">
				<div className="card-body-clubs">
					<div className="card-top-clubs">
						<div className="card-left-clubs">
							<h3 className="club-name-clubs">ICON</h3>
							<p className="club-type-clubs">Nightclub</p>
							<ul className="club-details-clubs">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Fridays and Sundays at 10:30PM</li>
							</ul>

						</div>
						<div className="card-right-clubs">
							<Image src={IconImage} alt="ICON nightclub in Boston" className="club-photo-clubs"/>
						</div>
					</div>
					<div className="card-details-clubs">
						<p className="club-description-clubs">Popular nightclub with events every Friday and Sunday starting at 10:30PM. Known label music, dancing, and a lively Boston crowd.</p>
						<div className="card-actions-clubs">
							<a href="https://www.iconnightclub.com/" target="_blank">Learn More</a>
							<a onClick={() => {handleCheckout([{ price: "price_1TOu54Ho5oc8DhhwWCznwVhN", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv-clubs">
				<div className="card-body-clubs">
					<div className="card-top-clubs">
						<div className="card-left-clubs">
							<h3 className="club-name-clubs">Venu</h3>
							<p className="club-type-clubs">Nightclub</p>
							<ul className="club-details-clubs">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Saturdays at 10:30PM</li>
							</ul>

						</div>
						<div className="card-right-clubs">
							<Image src={VenuImage} alt="Venu nightclub in Boston" className="club-photo-clubs"/>

						</div>
					</div>
					<div className="card-details-clubs">
						<p className="club-description-clubs">Exciting nightclub with lively Saturday events and a high-energy crowd.</p>
						<div className="card-actions-clubs">
							<a href="https://www.venuboston.com/" target="_blank">Learn More</a>
							<a onClick={() => {handleCheckout([{ price: "price_1TOu54Ho5oc8DhhwWCznwVhN", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv-clubs">
				<div className="card-body-clubs">
					<div className="card-top-clubs">
						<div className="card-left-clubs">
							<h3 className="club-name-clubs">Big Night Live</h3>
							<p className="club-type-clubs">Live Event Venue</p>
							<ul className="club-details-clubs">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>April 18 - Dillon Francis</li>
								<li>April 25 - Galantis</li>
								<li>May 2 - KSHMR</li>
							</ul>

						</div>
						<div className="card-right-clubs">
							<Image src={BngImage} alt="Big Night Live venue in Boston" className="club-photo-clubs"/>
						</div>
					</div>
					<div className="card-details-clubs">
						<p className="club-description-clubs">Big Night Live hosts shows with major DJs and has a late-night club atmosphere.</p>
						<div className="card-actions-clubs">
							<a href="https://bignightlive.com/" target="_blank">Learn More</a>
							<a   onClick={() => {handleCheckout([{ price: "price_1TOu54Ho5oc8DhhwWCznwVhN", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv-clubs">
				<div className="card-body-clubs">
					<div className="card-top-clubs">
						<div className="card-left-clubs">
							<h3 className="club-name-clubs">The Grand</h3>
							<p className="club-type-clubs">Nightclub</p>
							<ul className="club-details-clubs">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Fridays at 10:00PM</li>
							</ul>

						</div>
						<div className="card-right-clubs">
							<Image src={GrandImage} alt="The Grand nightclub in Boston" className="club-photo-clubs"/>
						</div>
					</div>
					<div className="card-details-clubs">
						<p className="club-description-clubs">One of Boston's biggest nightlife venues with Friday events, and a high-energy vibe.</p>
						<div className="card-actions-clubs">
							<a href="https://thegrandboston.com/" target="_blank">Learn More</a>
							<a   onClick={() => {handleCheckout([{ price: "price_1TOu54Ho5oc8DhhwWCznwVhN", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* COMPARISON TABLE */}
			{/* Comparison table layout based on W3Schools: https://www.w3schools.com/howto/howto_css_comparison_table.asp */}
	<div className="comparison-table-wrapper-clubs">
			<h2>Compare Boston Venues</h2>
			<table className="comparison-table-clubs">
				<tr>
					<th>Venue</th>
					<th>Age</th>
					<th>Location</th>
					<th>Vibe</th>
				</tr>
				<tr>
					<td><a href="https://www.iconnightclub.com/" target="_blank">ICON</a></td>
					<td>21+</td>
					<td>100 Warrenton St Boston, MA</td>
					<td>Big club energy, live DJs, dance floor</td>
				</tr>
				<tr>
					<td><a href="https://www.venuboston.com/" target="_blank">Venu</a></td>
					<td>21+</td>
					<td>100 Warrenton St Boston, MA</td>
					<td>Big club energy, live DJs, dance floor</td>
				</tr>
				<tr>
					<td><a href="https://bignightlive.com/" target="_blank">Big Night Live</a></td>
					<td>18+ / 21+</td>
					<td>110 Causeway St, Boston MA</td>
					<td>Live concert series, mixed music</td>
				</tr>
				<tr>
					<td><a href="https://thegrandboston.com/" target="_blank">The Grand</a></td>
					<td>21+</td>
					<td>58 Seaport Blvd, Boston MA</td>
					<td>High-energy nightclub shows</td>
				</tr>
			</table>
		</div>
	</div>

    )
}
