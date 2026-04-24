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
        <div id="main">
		<h2 id="clubs-heading">18+ Club Events in Boston</h2>

		<div className="container">
			<div className="filterDiv">
				<div className="card-body">
					
					<div className="card-top">
						<div className="card-left">
							<h3 className="club-name">Big Night Live 18+ Events</h3>
							<p className="club-type">Live Event Venue</p>
							<ul className="club-details">
								<li>Location: Downtown Boston</li>
								<li>Age: 18+</li>
								<li>April 16 - Lil Mosey</li>
								<li>April 24 - Jeezy Live in Boston</li>
								<li>May 1 - PEEAKABOO</li>
							</ul>

						</div>
						<div className="card-right">
							<Image src={BngImage} alt="Big Night Live venue in Boston" className="club-photo"/>
						</div>
					</div>
					
					<div className="card-actions">
						<a  style= {{   
								padding:" 1.5% 3%",
    						backgroundColor: "#d88373",
   					 color: "#50190f",
    					textDecoration: "none",
    				fontSize: "calc(10px + .3vw)",
    					marginRight: "2%"
						}} href="https://bignightlive.com/" target="_blank">Learn More</a>
						<a style= {{   
								padding:" 1.5% 3%",
    						backgroundColor: "#d88373",
   					 color: "#50190f",
    					textDecoration: "none",
    				fontSize: "calc(10px + .3vw)",
    					marginRight: "2%"
						}}  href="#" onClick={() => {handleCheckout([{ price: "price_1TPZn6Ho5oc8Dhhw6F6XgfJZ", quantity: 1 }], `${uri}/${path}`, `${uri}/${path}`)}}>Buy Ticket</a>
					</div>
				</div>
			</div>
		</div>


		{/*<!-- COMPARISON TABLE -->*/}
		{/*<!-- Comparison table layout based on W3Schools: https://www.w3schools.com/howto/howto_css_comparison_table.asp -->*/}
		<div className="comparison-table-wrapper">
			<h2>Compare Boston Venues</h2>
			<table className="comparison-table">
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
