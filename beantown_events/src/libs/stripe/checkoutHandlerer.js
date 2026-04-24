"use client"; 
import { createCheckoutSessionAction } from "./stripe";

export const handleCheckout = async (priceId, quantity = 1) =>{
      try {
        const { url } = await createCheckoutSessionAction({ priceId, quantity: quantity});
        console.log(url)
        window.location.href = url;

      } catch (err) {
        console.error(err);
      }
    } 
