import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/skills";
import Achieve from "./components/Achievement";
import Connect from "./components/LetsConnect";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Achieve />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
