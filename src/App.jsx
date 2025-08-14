import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Import, Menu } from "lucide-react";
import { Navbar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection"; 
import { Footer } from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";






function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
