"use client"; 
import { createCheckoutSessionAction } from "./stripe";

export const handleCheckout = async (priceId, success_url, cancel_url) =>{
      try {
        const { url } = await createCheckoutSessionAction({ priceId, success_url, cancel_url});
        console.log(url)
        window.location.href = url;

      } catch (err) {
        console.error(err);
      }
    } 
