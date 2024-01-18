import  React, { useState } from "react";
import styles from "./styles.module.css"
import Reviews from "./Components/Reviews";
import people from "./data"
function App() {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.title}>
          <h2>Our Reviews</h2>
          <div className={styles.underline}></div>
        </div>
        <Reviews />
      </section>
    </main>
   
  )
}

export default App;
