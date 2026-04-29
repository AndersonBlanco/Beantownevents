//Anderson 

"use client"; 
import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./eventViewer.css"
import "../../../globals.css"


import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";

export default function BoxingEventViewer(){

      const uri = "https://beantown-events.vercel.app/"
      const path = usePathname(); //use usePathname to extract the the active path (directory) of the site 



    const [obj, setObj] = useState(null); //using state variable to save the object loaded in from localstorage. The useState variable also allows to update a specific DOM component, which is needs re-rendering and is precisely what useState offers / allows to do 
        const [ticketsToVuy, setTicketsToBuy] = useState(1); 

    useEffect(() =>{ //use useEffect here to use window.localStorage after the DOM and the window loads in and are existing. I i do not use useEffect, there error will be missing components since they have yet to be created abd loaded in 
        const stored = window.localStorage.getItem("@selectedEvent"); //localStorage serves a cookie storage within the local session of the user, easily referenced across the entire wepage from any page 
        if(stored){ 
            setObj(JSON.parse(stored)); //this sets the useState variable (this type of variable allows re-render of the specific componnt that eeds re-redner ). this applies to any content that is liked or changes any visible content on the webpage 
        }
    }, [])

    if (!obj) { //fallback for when the variable is still not set. This buys time and renders fallback content until the object loads in
         //it i sexpected that if the obj variable is null, this will return anything else than true which triggers ths fallback content 
        return <div className="container-boxing">Loading event details...</div>;
    }


    const ticketCounterCOmponent = ( //set variable as a regular var rather than a function to avoid a re-run the function. This allows to implement it as a preset content, noo requiring to run a function 
        <div className = "ticketsCounter-boxing">
            <RemoveCircleIcon className = "removeCircleIcon-boxing" onClick = {() => setTicketsToBuy(ticketsToVuy -1)}/> {/* MaterialUI icon imported using npm library */}
            <input type = "number" value = {ticketsToVuy} onChange={(e) => setTicketsToBuy(JSON.parse(e.currentTarget.value))} /> {/* using onChange of the input tag. This mehtod allows to get the value inputted into the input tag as it changes in a stream style (ie like a water stream). THe callback (body of the ffunction (ie whats done when there are changes n the input), sets the variable to the new updated value of the input )*/}
            <AddCircleIcon className = "addCircleIcon-boxing"  onClick = {() => setTicketsToBuy(ticketsToVuy +1)}/> {/* MaterialUI icon imported using npm library */} 
        </div>
    )
    const PurchaseTickets = ( 
        <div className = "ticketSaleContainer-boxing">
            {ticketCounterCOmponent} {/* renders the value of th evariable (it 'return)' */}
            <button onClick = {() => handleCheckout([{ price: obj.id, quantity: ticketsToVuy }], `${uri}/${path}`, `${uri}/${path}`)}>Buy Now</button>

            </div>
    )



    return(
        <div className = "preview_container-boxing">
            <div className = "row-boxing" >
                {/* Used Image tag from next js to load in the image since <img is not optimal in next js */} 
                <Image alt = {`${obj.title} boxing event image`} src = {obj.img} className = "image-boxing" width = {1200} height = {800} />
                <div className = "column-boxing" >
                    <h2>{obj.title}</h2> {/*using '.' to access the properties of the object. This is possible becasue i used the JSON.parse which coberst it from ao string to aj actual object (josn format) */}
                    <p>{obj.description}</p>
                            {/*embedded variable so the content i houses is rendered instead of inclduing it inline. this is the purpose of components in jsx and one of its advantages*/ PurchaseTickets} 
                </div>
            </div>




        </div>
    )
}
