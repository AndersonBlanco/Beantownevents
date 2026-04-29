"use client"; 
import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./eventViewer.css"

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
        return <div className="container-boxing">Loading event details...</div>;
    }


    const ticketCounterCOmponent = (
        <div className = "ticketsCounter-boxing">
            <RemoveCircleIcon className = "removeCircleIcon-boxing" onClick = {() => setTicketsToBuy(ticketsToVuy -1)}/>
            <input type = "number" value = {ticketsToVuy} onChange={(e) => setTicketsToBuy(JSON.parse(e.currentTarget.value))} />
            <AddCircleIcon className = "addCircleIcon-boxing"  onClick = {() => setTicketsToBuy(ticketsToVuy +1)}/>
        </div>
    )
    const PurchaseTickets = ( 
        <div className = "ticketSaleContainer-boxing">
            {ticketCounterCOmponent}
            <button onClick = {() => handleCheckout([{ price: obj.id, quantity: ticketsToVuy }], `${uri}/${path}`, `${uri}/${path}`)}>Buy Now</button>

            </div>
    )



    return(
        <div className = "preview_container-boxing">
            <div className = "row-boxing" >
                <Image alt = {`${obj.title} boxing event image`} src = {obj.img} className = "image-boxing" width = {1200} height = {800} />
                <div className = "column-boxing" >
                    <h2>{obj.title}</h2>
                    <p>{obj.description}</p>
                            {PurchaseTickets}
                </div>
                
            </div>




        </div>
    )
}
