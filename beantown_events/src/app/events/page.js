'use client';
import { createCheckoutSessionAction } from "../../libs/stripe/stripe";
import Event from "@/app/dataModels/events";
import "./index.css"
import "../globals.css"
import Header from "../components/header/header";
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";
import { usePathname } from "next/navigation";

export default function Events() {
  //js logic: 
  const uri = "https://beantown-events.vercel.app/"
  const path = usePathname(); 
  
  const CheckoutButton = ({priceId}) =>{
   

    return <button onClick = {() => handleCheckout(priceId, 1, `${uri}/${path}`, `${uri}/${path}` )}>Checkout</button>
  }

  const TestEvent = new Event(
    "Sport", 
    "Rocky Marcianos Tournament", 
    "Yearly hosted Rocky Marcianos boxing tournament held in recognition and respect of late heavyweight world champion and boxing legend, Rocky Marciano",
    {
      "Start Date": "10/05/26",
      "End Date": "10/12/26",
      "Available Tickets": 100
    }
  );

  //html code below
  return (
      <div className="eventsContainer">
      <h1>Hello Home</h1>

      <CheckoutButton priceId={"price_1THnbpHo5oc8DhhwZWBpyK5X"}/>

      <hr/>
      <h1>Sample Event: </h1>
      {TestEvent.render()}


      
      </div>
     

  );
}
