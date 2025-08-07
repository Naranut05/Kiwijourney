import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Menu } from "lucide-react";
import { Navbar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection"; 
import { Footer } from "./components/Footer";






function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
