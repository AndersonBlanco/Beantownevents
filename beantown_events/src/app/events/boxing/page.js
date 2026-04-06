import "./boxing.css"
import NewEnglandSilverGloves from "../../src/boxing/NewEnglandSIlverGlovesImg1.jpg"; 
import Image from "next/image";
export default function Page(){
    const Events = [
        {
            title: "New England Silver Gloves Regionals",
            description: "Come watch and support your regional fighters battle it out in the ring. All fighters are of all ranges under 18 years old",
            date: "Sept 20th, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/regionals/", 
        },

                {
            title: "New England Silver Gloves Regionals",
            description: "Come watch and support your regional fighters battle it out in the ring. All fighters are of all ranges under 18 years old",
            date: "Sept 20th, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/regionals/", 
        },
        


                {
            title: "New England Silver Gloves Regionals",
            description: "Come watch and support your regional fighters battle it out in the ring. All fighters are of all ranges under 18 years old",
            date: "Sept 20th, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/regionals/", 
        },
        

                {
            title: "New England Silver Gloves Regionals",
            description: "Come watch and support your regional fighters battle it out in the ring. All fighters are of all ranges under 18 years old",
            date: "Sept 20th, 2026",
            img: NewEnglandSilverGloves,
            imgCitation: "https://www.nationalsilvergloves.org/regionals/", 
        },
        

    ];

    
    return(
        <>

        <div className = "container">


            <div className = "filter_menu">
                <h1>Region</h1>
                <label>New Enland</label><input type = "checkbox" />

                <h1>Ages</h1>
                <label>New Enland</label><input type = "checkbox" />


                 <h1>Fetaure</h1>
                <label>New Enland</label><input type = "checkbox" />


                 <h1>Fetaure</h1>
                <label>New Enland</label><input type = "checkbox" />
            </div>


        <div className = "events">

{
    Events.map((itm, idx) =>{
            return(
                <div className = "item_container">
                <Image className = "img" src = {itm.img} alt = "New England Region Boxing Event Image"/>
                <h1>New Engalndf Regional Silver Gloves</h1>

                </div>
            )
    })
}

        </div>

        </div>

        </>
    )
}