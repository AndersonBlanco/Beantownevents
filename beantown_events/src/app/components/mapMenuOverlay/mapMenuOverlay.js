import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import "./index.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function MapMenuOverlay(){
    const [menuOpened, set_menuOpened] = useState(false); 


       /*
        filteTitle: activeState (can be true if selected, else false)
        */ 
    const [filterOptions, setFilterOpions] = useState({ 
       filter1: false, 
       filter2: false, 
       filter3: false, 
       filter4: false, 
    })


    const SideMenuOverlay = (
        <div className = "sideMenuOverlay">
            <ArrowBackIosIcon className = "backIcon" onClick = {() => set_menuOpened(false)}/>

            <div className = "sideMenuContentBlock">
                <div className = "searchBar"></div>

            <ul className = "filterOptions">
                { 
                    Object.keys(filterOptions).map( filterTitle =>{
                        return <li>
                             <div className = "filterOptionContainer">
               <input type = "checkbox" onChange = {(v) =>{
             setFilterOpions(curr => {
                
                return{
                    ...curr, 
                    [filterTitle]: v.target.checked
                }

                })

                     




               }} />
                <label>{filterTitle}</label>
              
        </div>
                        </li>
                    })
                }
            </ul>
            </div>

            
          

        </div>
    )
    return(
        <div className = "mapMenuOverlay">
                {
                    menuOpened?
                    SideMenuOverlay
                     :
                     <>
                     {/*reminder: convert this style into the .css file*/}
                        <MenuIcon className = "menuIcon" color = {"action"} onClick = {() => set_menuOpened(!menuOpened)} style = {{position: "absolute", height: 50, width: 50, zIndex: 100, top: 100, right: 34, cursor: "pointer"}} /> 
                    </>  
                }
        </div>
    )
}