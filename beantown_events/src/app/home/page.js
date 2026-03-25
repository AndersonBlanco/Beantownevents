'use client';
import { createCheckoutSessionAction } from "../../libs/stripe/stripe";

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

  //html code below
  return (

        
      <div className={{/* styles.className */}}>
      <h1>Hello Home</h1>

      <CheckoutButton priceId={"price_1TDL4ZK0qyE7igDrcoYLZCUP"}/>

      </div>
     

  
  );
}
