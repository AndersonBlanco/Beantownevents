'use client';
import { createCheckoutSessionAction } from "../../libs/stripe/stripe";
import Event from "@/dataModels/events";
import "./index.css"
export default function Home() {
  //js logic: 
  
  const CheckoutButton = ({priceId}) =>{
    const handleCheckout = async () =>{
      try {
        const { url } = await createCheckoutSessionAction({ priceId, quantity: 1 });
        window.location.href = url;
      } catch (err) {
        console.error(err);
      }
    }

    return <button onClick = {handleCheckout}>Checkout</button>
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

        
      <div className={{/* styles.className */}}>
      <h1>Hello Home</h1>

      <CheckoutButton priceId={"price_1TDL4ZK0qyE7igDrcoYLZCUP"}/>

      <hr/>
      <h1>Sample Event: </h1>
      {TestEvent.render()}
      </div>
     

  
  );
}
