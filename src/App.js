import React from "react";
import Header from "./components/Header";

function App() {   
  const styles = {
    bg: {
      backgroundImage: "url(https://www.transparenttextures.com/patterns/skulls.png)",
      backgroundColor: "#f99c77b3",
      height: "100vh",
      width: "100vw"
    }
  } 
  return (
    <div style={styles.bg}>
      <Header />
    </div>
  )
};

export default App;