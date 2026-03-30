import Footer from "./components/footer";
import Header from "./components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="globalContainer">
        <Header/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}


