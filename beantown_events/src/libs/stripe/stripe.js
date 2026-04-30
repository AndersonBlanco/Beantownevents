//Anderson 
//Docs: https://docs.stripe.com/sdks/stripejs-react 
//Decided to use Stripe sdk for handling realistic payment functionality, managing potential cusotmers and tracking purchases.
//Using the stripe sdk was most straightforward with React JS. 
//More specifically, I used the stripe checkout class to create a checkout session (a secure URL to which the user is re-directed) which will have a new instance created when 
// a user toggles a buy button. The paramters for the session include priceId (provided from the product created in te Stripe 
// Dashboard, and quanitity of each prdocut/price_id. 
'use server'; //'use sever' signals that this file will run on the server only and not on the client side (ie, you cant use inspect on it!), and it makes sense becasue this is also where the secrets are pulled from the backedn and we dont want any leakage of that 

import Stripe from "stripe";


let stripeClient;

function getStripe() {
  if (!stripeClient) { //check if stripeClient is laready defined, if not, proceed with its qassignment/ invocation
    if (!process.env.STRIPE_SECRET_KEY) { //gets the api key from the Vercel bakcend which manages the secrets 
     console.log("Missing Stripe SECRET KEY!")
    }
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY); //creates a new class for Stripe object 
  }
  return stripeClient;
}
 

const success_url = process.env.SUCCESS_URL //no longer in use but can be easily odified
const cancel_url = process.env.CANCEL_URL //no longer in use but can be easily modifed

async function createCheckoutSession({ priceId, success_url, cancel_url}) {
  const stripe = getStripe();
  return stripe.checkout.sessions.create({ //creating a new session for the checkoutSessions 
    mode: "payment",
    line_items: priceId, // expecting an array like [{ price: "price_xxx", quantity: 1 }]
    success_url: success_url,
    cancel_url: cancel_url,
  });
}



export async function createCheckoutSessionAction({ priceId, success_url, cancel_url}) {
  if (!Array.isArray(priceId) || priceId.length === 0) { //validates that the priceId argument is of expected data type (Array is a built in class constructor for , as the name suggests, arrays)
    console.log("invalid line items")
  }

  const session = await createCheckoutSession({ priceId, success_url, cancel_url}); //create sthe checkout session
  if (!session.url) {
    console.log("no checkout session URL created")
  }

  return { url: session.url }; //returns the secure Striep checout session URL 
}


