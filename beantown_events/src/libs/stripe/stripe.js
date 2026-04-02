'use server';

import Stripe from "stripe";


let stripeClient;

function getStripe() {
  if (!stripeClient) { //check if stripeClient is laready defined, if not, proceed with its qassignment/ invocation
    if (!process.env.STRIPE_SECRET_KEY) {
     console.log("Missing Stripe SECRET KEY!")
    }
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}

const success_url = process.env.SUCCESS_URL
const cancel_url = process.env.CANCEL_URL

async function createCheckoutSession({ priceId, quantity=1 }) {
  const stripe = getStripe();
  return stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity }],
    success_url: success_url,
    cancel_url: cancel_url,
  });
}



export async function createCheckoutSessionAction({ priceId, quantity = 1 }) {
  if (!priceId || typeof priceId !== "string") {
    console.log("invalid price id")
  }

  const session = await createCheckoutSession({ priceId, quantity });
  if (!session.url) {
    console.log("no checkout session URL created")
  }

  return { url: session.url };
}
