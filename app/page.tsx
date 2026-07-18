import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <About/>
         <Skills/>
         <TechStack/>
         <FeaturedProjects/>
         <Experience/>
         <Education/>
         <Footer/>

    </div>
  );
}
