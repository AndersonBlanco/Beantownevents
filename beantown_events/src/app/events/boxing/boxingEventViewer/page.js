"use client"; 
import Image from "next/image"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./eventViewer.css"

//usin g Material UI fro icons: 
    /* 
    * Shopping cart
*/

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function BoxingEventViewer(){
    

    const obj = JSON.parse(window.localStorage.getItem("@selectedEvent")); 
    const [ticketsToVuy, setTicketsToBuy] = useState(0); 


    const ticketCounterCOmponent = (
        <div className = "ticketsCounter">
            <RemoveCircleIcon className = "removeCircleIcon" onClick = {() => setTicketsToBuy(ticketsToVuy -1)}/>
            <p>{ticketsToVuy}</p>
            <AddCircleIcon className = "addCircleIcon"  onClick = {() => setTicketsToBuy(ticketsToVuy +1)}/>
        </div>
    )
    const PurchaseTickets = ( 
        <div className = "ticketSaleContainer">
            {ticketCounterCOmponent}
            <button>Add to Cart</button>

            </div>
    )
    return(
        <div className = "container">
            <div className = "eventDetailContainer">
                <Image src = {obj.img} height = {200} width = {"auto"} />
                <div className = "eventTextDetails">
                <h1>{obj.title}</h1>
                <p>{obj.description}</p>
         <p className = "date">
                    {obj.date}
                </p>
                   
                
                </div>

             
                
            </div>
            <div className = "attributesList">
                    <ul>
                    {
                        obj.attributes.map(itm => <li>
                            <p style = {{}}>{itm}</p>
                        </li>)
                    }
                    </ul>
                </div>


                    {PurchaseTickets}

        </div>
    )
}