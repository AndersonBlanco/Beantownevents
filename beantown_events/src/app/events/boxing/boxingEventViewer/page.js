"use client"; 
import Image from "next/image"
import { useParams } from "next/navigation"
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

const handleCheckout = async (priceId, quantity = 1) =>{
          try {
            const { url } = await createCheckoutSessionAction({ priceId, quantity: 1 });
            console.log(url)
            window.location.href = url;
            
          } catch (err) {
            console.error(err);
          }
        } 

export default function BoxingEventViewer(){



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
            <button onClick = {() => handleCheckout("price_1THnbpHo5oc8DhhwZWBpyK5X")}>Add to Cart</button>

            </div>
    )



    return(
        <div className = "preview_container">
            <div className = "row" >
                <Image alt = {`${obj.title}bxoing event image`} src = {obj.img} className = "image" />
                <div className = "column" >
                    <h2>{obj.title}</h2>
                    <p>{obj.description}</p>
                            {PurchaseTickets}
                </div>
                
            </div>



            <div className = "photoGallery">
                {
                    ["red", "blue", "green", "gray", "cyan", ].map((itm, idx) =>{
                        return <div key = {idx} className = "placeholderImageFrame" style = {{backgroundColor: itm}}>

                        </div>
                    })
                }
            </div>

        </div>
    )
}