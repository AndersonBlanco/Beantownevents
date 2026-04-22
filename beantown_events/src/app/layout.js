"use client"; 
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const path = usePathname(); 

  return (
    <html lang="en">
      <body>
        <div className="globalContainer">
        {
          !(path == "/contact_us")&& <Header/> 
          }
        {children}
      {!(path == "/contact_us" || path.includes("concerts-intro"))&& <Footer style = {{}} />}
        </div>
        
        </body>
    </html>
  );
}


