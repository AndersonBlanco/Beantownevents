//Yana
"use client"; 
import "../clubpages.css"
import clubs_pages_logic from "../clubpages";
import { useEffect } from "react";
import Image from "next/image";
import BngImage from "../src/bng.jpg"; 
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";
import { usePathname } from "next/navigation";
export default function Clubs18(){
	   const uri = "https://beantown-events.vercel.app/"
		  const path = usePathname(); 
	
	useEffect(() =>{
		//clubs_pages_logic()
	});

    return(
        <div id="main-clubs">
		<h2 id="clubs-heading-clubs">18+ Club Events in Boston</h2>

		<div className="container-clubs">
			<div className="filterDiv-clubs">
				<div className="card-body-clubs">
					
					<div className="card-top-clubs">
						<div className="card-left-clubs">
							<h3 className="club-name-clubs">Big Night Live 18+ Events</h3>
							<p className="club-type-clubs">Live Event Venue</p>
							<ul className="club-details-clubs">
								<li>Location: Downtown Boston</li>
								<li>Age: 18+</li>
								<li>April 16 - Lil Mosey</li>
								<li>April 24 - Jeezy Live in Boston</li>
								<li>May 1 - PEEAKABOO</li>
							</ul>

						</div>
						<div className="card-right-clubs">
							<Image src={BngImage} alt="Big Night Live venue in Boston" className="club-photo-clubs"/>
						</div>
					</div>
					
					<div className="card-actions-clubs">
						<a href="https://bignightlive.com/" target="_blank">Learn More</a>
						<a onClick={() => {handleCheckout([{ price: "price_1TQXdAHo5oc8DhhwEnEVOylq", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
					</div>
				</div>
			</div>
		</div>


		{/*<!-- COMPARISON TABLE -->*/}
		{/*<!-- Comparison table layout based on W3Schools: https://www.w3schools.com/howto/howto_css_comparison_table.asp -->*/}
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
