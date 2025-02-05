
//  import skills from "@/skills/page";
import Hero from "./components/hero";
// import Skills from "@/skills/page";
import Portfolio from "./portfolio/page";

// import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-slate-400"> 
      <Hero />
      {/* <Skills /> */}
      <Portfolio />
      
    </div>
    
  );
}



