import { Import, Menu } from "lucide-react";
import { Navbar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  return (
    <div className="bg-[#faf9f7]">
      <Navbar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
