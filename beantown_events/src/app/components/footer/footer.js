//Jackson
import "./footer.css"
import "../../globals.css"
import Link from "next/link"

export default function Footer({...props}){ //Anderson added the {..props} to incldued any extar attributes that might be added onto this component but ar enot defined by name (<Footer ranodmAttrbiute = {} style = {} /> )
    return(
        <footer { ...props}>{/* this is whre the generic attributes get assigned onto the real footer tag */} 
        <p> &#169; 2026 Beantown Events. <Link href="/credits">All Rights Reserved.</Link></p>
        <p>Find Boston Events Near You</p>

        </footer>

    )
}