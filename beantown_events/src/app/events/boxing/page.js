'use client'; 
import "./boxing.css"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {Events} from "./components/EventsClass";

import AddCircleIcon from '@mui/icons-material/AddCircle';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { handleCheckout } from "@/libs/stripe/checkoutHandlerer";

export default function Page(){
    const path = usePathname();
        const uri = "https://beantown-events.vercel.app/"

    const router = useRouter(); 
    //used Gemini to egnetate fdummy filters
    const [filters, setFilters] = useState([
        {
            title: "Region",
            options: [
                { label: "New England", selected: false },
                { label: "Mid-Atlantic", selected: false },
                { label: "Southeast", selected: false },
                { label: "Great Lakes", selected: false },
                { label: "West Coast", selected: false },
                { label: "International", selected: false },
            ],
        },
        {
            title: "Age Division",
            options: [
                { label: "Youth", selected: false },
                { label: "Junior", selected: false },
                { label: "Teen", selected: false },
                { label: "Adult", selected: false },
                { label: "Masters", selected: false },
            ],
        },
        {
            title: "Competition Level",
            options: [
                { label: "Novice", selected: false },
                { label: "Open", selected: false },
                { label: "Elite", selected: false },
                { label: "Qualifier", selected: false },
                { label: "Invitational", selected: false },
            ],
        },
        {
            title: "Weight Class",
            options: [
                { label: "Flyweight", selected: false },
                { label: "Bantamweight", selected: false },
                { label: "Featherweight", selected: false },
                { label: "Lightweight", selected: false },
                { label: "Welterweight", selected: false },
                { label: "Middleweight", selected: false },
                { label: "Heavyweight", selected: false },
            ],
        },
        {
            title: "Sanctioning Body",
            options: [
                { label: "USA Boxing", selected: false },
                { label: "Golden Gloves", selected: false },
                { label: "Silver Gloves", selected: false },
                { label: "NCAA Boxing", selected: false },
                { label: "Independent", selected: false },
            ],
        },
        {
            title: "Event Type",
            options: [
                { label: "Amateur Card", selected: false },
                { label: "Pro Card", selected: false },
                { label: "Title Fight", selected: false },
                { label: "Team Dual", selected: false },
                { label: "Tournament Bracket", selected: false },
                { label: "Exhibition", selected: false },
            ],
        },
        {
            title: "Venue Type",
            options: [
                { label: "Arena", selected: false },
                { label: "Community Gym", selected: false },
                { label: "College Fieldhouse", selected: false },
                { label: "Outdoor Ring", selected: false },
                { label: "Casino", selected: false },
            ],
        },
    ]);
     
    const [query, setQuery] = useState(""); //search arguemnt, search for title of event 
    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredEventTitles, set_filteredEventTitles] = useState([]); //array of event titles that match the search and filter criteria, used to determine which events to show in the UI

    function handleQuery(e){
        setQuery(String(e.target.value).trim().toLowerCase()); 
    }



    
    function handleFilterOptionTozggle(optionLabel){
        setSelectedFilters((prevSelectedFilters) => {

            Events.map((event) =>{
                if(event.attributes.includes(optionLabel)){
                    if(!filteredEventTitles.includes(event.title)){
                        set_filteredEventTitles((prevFilteredEventTitles) => [...prevFilteredEventTitles, event.title])
                    }else{
                         set_filteredEventTitles((prevFilteredEventTitles) => prevFilteredEventTitles.filter((title) => title !== event.title))
                    }
                }
            })

            if (prevSelectedFilters.includes(optionLabel)) {
                return prevSelectedFilters.filter((label) => label !== optionLabel);
            }
            return [...prevSelectedFilters, optionLabel];
        })
      
    }

    useEffect(() =>{
        console.log(
            selectedFilters
        )
    }, [selectedFilters])

    const [itemsInCart, setItemsInCart] = useState({});
    const [cartPrice, setCartPrice] = useState(0); 
    const [itemsInCart_count, set_itemsInCart_count] = useState(0); 


 

    const handleAddButton = (event) =>{

         try{
                setItemsInCart(prev => {
                        return{
                                ...prev,
                                [event.id]: {
                                    price: event.id, 
                                    quantity: prev[event.id] ? 1 + prev[event.id].quantity : 1
                                }
                            }
                        });

            set_itemsInCart_count(prev =>  prev + 1);
            setCartPrice(prev => prev + event.price)

                        console.log("Added item", itemsInCart)
                        }catch(e){
                            console.log("Error adding item: ", e.message)
                        }
    }

    const handleRemoveItemFromCart = (event) =>{
        try{

            setItemsInCart(prev =>{
                return{
                    ...prev,
                    [event.id]: {
                        price: event.id,
                        quantity: prev[event.id].quantity - 1 
                    }
                }
            });

            if( itemsInCart_count > 1){ 
            set_itemsInCart_count(prev => prev - 1);
            setCartPrice(prev => prev + event.price)
            }else{
            set_itemsInCart_count(prev => 0);

            }



        }catch(e){
            console.log("Error removing item from cartP: ", e.message); 
        }
    }

    const EventItem = ({event, idx}) =>{
        return(
            <div key = {idx} className = "item_container" onClick = {() =>{
   
          
        }}>


                    <Image  className = "img" src = {event.img} alt = {`${event.title} event image`} width = {360} height = {240} onClick = {() => {
                                 //do window.localsrtorrage for cookie stored data 
                      window.localStorage.setItem("@selectedEvent", JSON.stringify(event)); 
             
                        router.push("/events/boxing/boxingEventViewer");
                    }}/>

                    <div className = "text_details" onClick = {() =>{
                           //do window.localsrtorrage for cookie stored data 
                      window.localStorage.setItem("@selectedEvent", JSON.stringify(event)); 
             
                        router.push("/events/boxing/boxingEventViewer");
                    }}>
                    <h1>{event.title}</h1>
                    <h4>{event.date}</h4>
                    </div>

                   <div className = "eventItemInstanceInCart">
                    <RemoveCircleIcon className = "removeCircleIcon" onClick = {() =>{ 
                       handleRemoveItemFromCart(event)





                }}
                    />
                    <h2>{itemsInCart[event.id] ? itemsInCart[event.id].quantity : 0 }</h2>
                    <AddCircleIcon className = "addCircleIcon"  
                    onClick = {() => handleAddButton(event)}
                    />

            </div>

                    </div>
        )
    }

    


    const MyCartQuickViewSlip = ( 
        //bottom slip with fixed position showing the user's total ex[ected amount to pay dependent on how many tickets tehy've added to their cart thus far]
        <>
        {//this renders the shopping cart only if both conditions is true, of which the html component is true and thus the andn statement can only be true if the shopping cart is of > 0 length
            itemsInCart_count > 0 && <div className = "my_cart_quick_view_slip">
                <h2>{itemsInCart_count} Items</h2>
                <h2>${cartPrice} </h2>
            <button className = "checkout_button" onClick = {() =>{
                handleCheckout(Object.values(itemsInCart), `${uri}/${path}`, `${uri}/${path}`)
            }}>Checkout</button>
        </div>
        }
        </>
    
    )


 
    return(
        <>

        <div className = "boxing_container">
            <div className = "filter_menu">
                {/* depriccated: <input type = "text" placeholder="Search for events..." className="search_bar" onChange = {handleQuery}/> */} 
                {
                    filters.map((filter, idx) => {
                        return (
                            <div key = {idx} className = "section_outer_container">
                                  <h2>{filter.title}</h2>
                                <hr color="lightgray"/>

                            <div key = {filter.title} className="filter_section_container">
                                

                                {
                                    filter.options.map((option) => {
                                        return (
                                            <div className = "filter_checbox_row" key = {`${filter.title}-${option.label}`}>
                                            <label>{option.label}</label><input type = "checkbox" checked = {selectedFilters.includes(option.label)} onChange = {() => handleFilterOptionTozggle(option.label)} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </div>
                        )
                    })
                }
            </div>

<div className = "events">

{
  Events.map((event, idx) =>{
    if(filteredEventTitles.length === 0){

        return <EventItem key = {idx} event = {event} idx = {idx} />
    }

  if(filteredEventTitles.includes(event.title)){
    return <EventItem key = {idx} event = {event} idx = {idx} />

  }
  })


}

        </div>

 
        {MyCartQuickViewSlip}
        </div>

        </>
    )
}

//iNlclude different layout for events 
