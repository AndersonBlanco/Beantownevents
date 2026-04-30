//Anderson 

"use client"; //specieis this file can be exposed on the front end ot users 
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const path = usePathname(); 

   //the (!(path == ".." || !path.includes("...")) && <Header/> ) below is a simple if statement that allws to dynamically manipulate when the Hedare and Footer should render depending on the path 
      // code && true ---> the code gets executed 
        // code && falase -> the code does nto get executed ------> thats the logic (just inline conditional statements)


    //all the children here are simply the conetnet that this function wraps around (that is all of the wbeiste actually by defualt of Next JS configs)

  return (
    <html lang="en">
      <body>
        <div className="globalContainer">
        {
          (!(path == "/contact_us") || !path.includes("concerts-intro")) && <Header/> 
          }

          {children}
      {!(path == "/contact_us" || path.includes("concerts-intro"))&& <Footer style = {{}} />}
        </div>
        
        </body>
    </html>
  );
}


