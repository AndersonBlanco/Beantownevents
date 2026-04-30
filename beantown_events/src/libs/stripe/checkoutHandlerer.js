"use client"; 
import { createCheckoutSessionAction } from "./stripe"; //importing the cusotm checkout session handlerer 

export const handleCheckout = async (priceId, success_url, cancel_url) =>{
      try {
        const { url } = await createCheckoutSessionAction({ priceId, success_url, cancel_url}); //expected url tha tredirects the user to the secure stripe session
        console.log(url)
        window.location.href = url; //window location.href sets the url of the user (ie their location currently) to the target url 

      } catch (err) {
        console.error(err); //catch block to log error
      }
    } 
