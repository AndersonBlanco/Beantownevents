//Yana 
"use client"; 
import Image from "next/image";
import "../clubpages.css"
import VenuImage from "../src/venu.jpg"
import BngImage from "../src/bng.jpg"; 
import GrandImage from "../src/grand.jpg"; 
import IconImage from "../src/icon.jpg"; 
import clubs_pages_logic from "../clubpages";
import { useEffect } from "react";

export default function Clubs21(){
	useEffect(() =>{
		clubs_pages_logic(); 
	})
    return(
        <div id="main">
		<h2 id="clubs-heading">21+ Club Events in Boston</h2>

		<div className="container">
			<div className="filterDiv">
				<div className="card-body">
					<div className="card-top">
						<div className="card-left">
							<h3 className="club-name">ICON</h3>
							<p className="club-type">Nightclub</p>
							<ul className="club-details">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Fridays and Sundays at 10:30PM</li>
							</ul>
							<button className="expand-btn">Expand</button>
						</div>
						<div className="card-right">
							<Image src={IconImage} alt="ICON nightclub in Boston" className="club-photo"/>
						</div>
					</div>
					<div className="card-details">
						<p className="club-description">Popular nightclub with events every Friday and Sunday starting at 10:30PM. Known label music, dancing, and a lively Boston crowd.</p>
						<div className="card-actions">
							<a href="https://www.iconnightclub.com/" target="_blank">Learn More</a>
							<a href="#" onClick={() => {}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv">
				<div className="card-body">
					<div className="card-top">
						<div className="card-left">
							<h3 className="club-name">Venu</h3>
							<p className="club-type">Nightclub</p>
							<ul className="club-details">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Saturdays at 10:30PM</li>
							</ul>
							<button className="expand-btn">Expand</button>
						</div>
						<div className="card-right">
							<Image src={VenuImage} alt="Venu nightclub in Boston" className="club-photo"/>

						</div>
					</div>
					<div className="card-details">
						<p className="club-description">Exciting nightclub with lively Saturday events and a high-energy crowd.</p>
						<div className="card-actions">
							<a href="https://www.venuboston.com/" target="_blank">Learn More</a>
							<a href="#" onClick={() =>{}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv">
				<div className="card-body">
					<div className="card-top">
						<div className="card-left">
							<h3 className="club-name">Big Night Live</h3>
							<p className="club-type">Live Event Venue</p>
							<ul className="club-details">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>April 18 - Dillon Francis</li>
								<li>April 25 - Galantis</li>
								<li>May 2 - KSHMR</li>
							</ul>
							<button className="expand-btn">Expand</button>
						</div>
						<div className="card-right">
							<Image src={BngImage} alt="Big Night Live venue in Boston" className="club-photo"/>
						</div>
					</div>
					<div className="card-details">
						<p className="club-description">Big Night Live hosts shows with major DJs and has a late-night club atmosphere.</p>
						<div className="card-actions">
							<a href="https://bignightlive.com/" target="_blank">Learn More</a>
							<a href="#" onClick={() =>{}}>Buy Ticket</a>
						</div>
					</div>
				</div>
			</div>

			<div className="filterDiv">
				<div className="card-body">
					<div className="card-top">
						<div className="card-left">
							<h3 className="club-name">The Grand</h3>
							<p className="club-type">Nightclub</p>
							<ul className="club-details">
								<li>Location: Downtown Boston</li>
								<li>Age: 21+</li>
								<li>Events: Fridays at 10:00PM</li>
							</ul>
							<button className="expand-btn">Expand</button>
						</div>
						<div className="card-right">
							<Image src={GrandImage} alt="The Grand nightclub in Boston" className="club-photo"/>
						</div>
					</div>
					<div className="card-details">
						<p className="club-description">One of Boston's biggest nightlife venues with Friday events, and a high-energy vibe.</p>
						<div className="card-actions">
							<a href="https://thegrandboston.com/" target="_blank">Learn More</a>
							<a href="#" onClick={() =>{}}>Buy Ticket</a>
						</div>
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