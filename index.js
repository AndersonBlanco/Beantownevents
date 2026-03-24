


const stripe_sandbox_apiKey = "pk_test_51T9GsUK0qyE7igDrRDjRfhvZtFDXl7YFyvrlamZWoqkPJD1z261eQLPiBZPlFzb7EMq3glPYw0IZY2uDTRdoiYhr00wYioMp8l";
const stripe = new Stripe(stripe_sandbox_apiKey)

//data models: START
//This section is houses the data models like the event class of insatnces for each events, 
// the arrays containing the events, and the shopping cart array which contains the 'tickets' the user adds to their 'shopping cart' 

const shoppingCart = []; 
class Event{ 
    constructor(title, type, location, peopleAttending, additionalDetails){
        //explaining properties of this class: 
        /*
        title : the name of the event 
        type : type of event (ie, concert, sportsEveent, etc) 
        peopleAttending : the number of expected people attending the event (ie, size of event?) 
        (optional) additionalDetails : a dictoinary contianing extra details of the event which will be renderred in a predefined format like a table or a list 

        How would this additionalDetails dicitonary look like in the code and how to mentally thik about it: 
            additionalDetails = { 
                detailName: value,
                foodsAvailable: [pancakes, suasages, etc], 
                teamsPlaying: [Patriots, etc],
                durationPerGame: 20s 
                ...
            } 
        */
         
    }
}


//If the class below is used, then each seller would have a total stock of tickets sold, so we can treat this with a variable inside a custom seller class 
class seller{//USE if the tickets are sold from random people who want to re-sell their tickets. Otherwise, this class is not useful 
        constructor(self, seller, ticketsOnSale){
             /* 
             seller : name of seller 
             ticketsOnSale : the array of tickets (using the ticket class) they are selling 

            More about the ticketsOnSale: 
                ticketsOnSale = [[ticket, totalInStock], [...], ...]

                where each sub-array is another array such that the first element is the class ticket contianing the 
                meta data for ticket type and the second element is the number of this type of tickets the seller has in stock 
             */



        }
}
class ticket{ //USE if the tickets are sold from random people who want to re-sell their tickets. Otherwise, this class is not useful 
    constructor(seller, customer, price, dateBought){ 
        /* 
        seller : the indiviudal that is selling the ticket or has already sold it to the customer
        cusotmer : the individual who bought the ticket 
        price : price of ticket 
         dateBought: the date in which the ticket was bought 
        */
    }

    addToCart(){
        //add ticker to shoppingCart array
    }

    removeFromCart(){
        //removes ticket from shoppingCart array 
    }
}
//data models: END
//stripe sandbox api : START



async function postPayment(){
    console.log("invoked postPayment")
    const {error} = await stripe.checkout.sessions.create({
            lineItems: [{
            price: 'price_1TDL4ZK0qyE7igDrcoYLZCUP', 
            quantity: 1,
        }],
        mode: 'payment',
        // These URLs must match where your project is running (e.g., localhost)
        successUrl: "https://google.com",
        cancelUrl: "https://youtube.com",

    })

       if (error) {
        console.error("Stripe Checkout Error:", error.message);
    }
}

//stripe sandbox api : END
