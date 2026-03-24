import Image from "next/image";
import styles from "./page.module.css";

export default function Home(){
//js logic 

//html code below 
  return (
    <html>
      <body>

      <div className={styles.page}>
      <h1>Hello Universe</h1>
      </div>

      <a href = "/home">Test Nav</a>

      </body>
    </html>
  
  );
}
