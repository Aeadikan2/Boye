import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

export default function App() {
  return (
   <div className="overflow-x-hidden text-neutral-300 antialiased  selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
    

    <div className=" container mx-auto px-8">
    <Navbar />
    <Hero />
    <About />
    <Technologies />
    <Experience />
    <Projects />
    <Contact />
    </div>
   </div>
  )
}