"use client"; 
import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./eventViewer.css"
import { createCheckoutSessionAction } from "@/libs/stripe/stripe";
//usin g Material UI fro icons: 
    /* 
    * Shopping cart
*/

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";

export default function BoxingEventViewer(){

      const uri = "https://beantown-events.vercel.app/"
      const path = usePathname(); 



    const [obj, setObj] = useState(null);
        const [ticketsToVuy, setTicketsToBuy] = useState(1); 

    useEffect(() =>{
        const stored = window.localStorage.getItem("@selectedEvent"); 
        if(stored){
            setObj(JSON.parse(stored)); 
        }
    }, [])

    if (!obj) {
        return <div className="container">Loading event details...</div>;
    }


    const ticketCounterCOmponent = (
        <div className = "ticketsCounter">
            <RemoveCircleIcon className = "removeCircleIcon" onClick = {() => setTicketsToBuy(ticketsToVuy -1)}/>
            <input type = "number" value = {ticketsToVuy} onChange={(e) => setTicketsToBuy(JSON.parse(e.currentTarget.value))} />
            <AddCircleIcon className = "addCircleIcon"  onClick = {() => setTicketsToBuy(ticketsToVuy +1)}/>
        </div>
    )
    const PurchaseTickets = ( 
        <div className = "ticketSaleContainer">
            {ticketCounterCOmponent}
            <button onClick = {() => handleCheckout([{ price: "price_1TOu4kHo5oc8DhhwrGEseqvl", quantity: ticketsToVuy }], `${uri}/${path}`, `${uri}/${path}`)}>Buy Now</button>

            </div>
    )



    return(
        <div className = "preview_container">
            <div className = "row" >
                <Image alt = {`${obj.title} boxing event image`} src = {obj.img} className = "image" width = {1200} height = {800} />
                <div className = "column" >
                    <h2>{obj.title}</h2>
                    <p>{obj.description}</p>
                            {PurchaseTickets}
                </div>
                
            </div>




        </div>
    )
}
