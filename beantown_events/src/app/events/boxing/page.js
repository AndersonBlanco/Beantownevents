'use client'; 
import "./boxing.css"
import NewEnglandSilverGloves from "../../src/boxing/NewEnglandSIlverGlovesImg1.jpg"; 
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Page(){
    const router = useRouter(); 

    //used gemini to generate dummy data and scrape web fro valid URL for learnMore links per Event 
    const Events = [
        {
            title: "New England Silver Gloves Youth Bracket",
            description: "Regional youth tournament with multiple clubs competing in a weekend bracket.",
            date: "September 20, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/regionals/",
            attributes: ["New England", "Youth", "Open", "Flyweight", "Silver Gloves", "Tournament Bracket", "Community Gym"],
        },
        {
            title: "Mid-Atlantic Golden Gloves Fall Pro Card",
            description: "High-energy evening card featuring established regional contenders and local prospects.",
            date: "October 4, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.goldenglovesusa.org/",
            attributes: ["Mid-Atlantic", "Adult", "Elite", "Lightweight", "Golden Gloves", "Pro Card", "Arena"],
        },
        {
            title: "Southeast Collegiate Team Dual Classic",
            description: "College programs face off in a scored dual-meet format across several bouts.",
            date: "October 11, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://usaboxing.org/",
            attributes: ["Southeast", "Teen", "Qualifier", "Welterweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
        },
        {
            title: "Great Lakes Championship Night",
            description: "Regional title bouts headlined by top-ranked amateurs preparing for nationals.",
            date: "October 18, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://usaboxing.org/",
            attributes: ["Great Lakes", "Adult", "Elite", "Middleweight", "USA Boxing", "Title Fight", "Arena"],
        },
        {
            title: "West Coast Proving Grounds",
            description: "Prospect-focused card highlighting first-year pro talent in a major boxing market.",
            date: "October 25, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://boxrec.com/",
            attributes: ["West Coast", "Adult", "Novice", "Heavyweight", "Independent", "Pro Card", "Casino"],
        },
        {
            title: "International Amateur Exchange Showcase",
            description: "Traveling youth teams compete in friendly exhibition bouts with international officials.",
            date: "November 1, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.iba.sport/",
            attributes: ["International", "Junior", "Invitational", "Bantamweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
        },
        {
            title: "New England Golden Gloves Qualifier",
            description: "Key qualifying tournament where winners advance to the late-season regional finals.",
            date: "November 8, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.goldenglovesusa.org/",
            attributes: ["New England", "Teen", "Qualifier", "Featherweight", "Golden Gloves", "Tournament Bracket", "Community Gym"],
        },
        {
            title: "Mid-Atlantic Masters Evening Card",
            description: "Experienced fighters return for a professionally run masters division showcase.",
            date: "November 15, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://usaboxing.org/",
            attributes: ["Mid-Atlantic", "Masters", "Open", "Welterweight", "Independent", "Amateur Card", "Casino"],
        },
        {
            title: "Southeast Youth Development Festival",
            description: "Entry-level youth showcase with coaching clinics and short-form supervised exhibitions.",
            date: "November 22, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://usaboxing.org/",
            attributes: ["Southeast", "Youth", "Novice", "Flyweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
        },
        {
            title: "Great Lakes Silver Gloves Juniors",
            description: "Junior division card emphasizing technical scoring and championship progression points.",
            date: "December 6, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/",
            attributes: ["Great Lakes", "Junior", "Open", "Bantamweight", "Silver Gloves", "Amateur Card", "Community Gym"],
        },
        {
            title: "West Coast Collegiate Invitational Duals",
            description: "Top college squads meet in an invitational dual format with national-level judging crews.",
            date: "December 13, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.usiba.org/",
            attributes: ["West Coast", "Adult", "Invitational", "Lightweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
        },
        {
            title: "International Golden Gloves Championship Series",
            description: "Season-ending championship card featuring cross-border matchups and title defenses.",
            date: "December 20, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.goldenglovesusa.org/",
            attributes: ["International", "Masters", "Elite", "Featherweight", "Golden Gloves", "Title Fight", "Arena"],
        },
    ];


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

       
    return(
        <>

        <div className = "container">


            <div className = "filter_menu">
                <input type = "text" placeholder="Search for events..." className="search_bar" onChange = {handleQuery}/>
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
        return <div key = {idx} className = "item_container" onClick = {() =>{
            //do window.localsrtorrage for cookie stored data 
            window.localStorage.setItem("@selectedEvent", JSON.stringify(event)); 
            router.push("/events/boxing/boxingEventViewer");
        }}>
                    <Image className = "img" src = {event.img} alt = {`${event.title} event image`}/>
                    <h1>{event.title}</h1>
                    <h4>{event.date}</h4>

                    </div>
    }

  if(filteredEventTitles.includes(event.title)){
    return <div key = {idx} className = "item_container"   onClick = {() =>{
            //do window.localsrtorrage for cookie stored data 
            window.localStorage.setItem("@selectedEvent", JSON.stringify(event)); 
            router.push("/events/boxing/boxingEventViewer");
        
        }}>
                <Image className = "img" src = {event.img} alt = {`${event.title} event image`}/>
                <h1>{event.title}</h1>
                <h4>{event.date}</h4>

                </div>
  }
  })


}

        </div>

        </div>

        </>
    )
}

//iNlclude different layout for events 

