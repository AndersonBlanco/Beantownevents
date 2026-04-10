import "./footer.css"
import "../../globals.css"
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
        <p> &#169; 2026 Beantown Events. <Link href="/credits">All Rights Reserved.</Link></p>
        <p>Find Boston Events Near You</p>

        </footer>

    )
}