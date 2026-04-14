//Yana
"use client"; 
import "../clubpages.css"
import clubs_pages_logic from "../clubpages";
import { useEffect } from "react";
import Image from "next/image";
import BngImage from "../src/bng.jpg"; 

export default function Clubs18(){
	useEffect(() =>{
		clubs_pages_logic()
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
							<button className="expand-btn">Expand</button>
						</div>
						<div className="card-right">
							<Image src={BngImage} alt="Big Night Live venue in Boston" className="club-photo"/>
						</div>
					</div>
					
					<div className="card-actions">
						<a href="https://bignightlive.com/" target="_blank">Learn More</a>
						<a href="#" onClick={() => {}}>Buy Ticket</a>
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