'use client'


import About from "@/components/sections/About";
//import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
// import Clients from "@/components/ui/Clients"
import Hero from "@/components/sections/Hero";
import Services1 from "@/components/sections/Services1";
//import { StarsBackground } from "@/components/ui/StarsBackground";
import Animation from "@/components/ui/ParticleSystem";
//import { useRef, useEffect } from "react";
//import Spline from "@splinetool/react-spline/next";
// import { StarsBackground } from "@/components/ui/StarsBackground";
//import Hero1 from "@/components/sections/Hero1";
import Testimonials from "@/components/sections/Testimonials";
import { Projects } from "@/components/sections/Projects";
//import TestimonialCards from "@/components/ui/TestimonialCards";

export default function Home() {
  
  
  return (
    <>
      {/* {isLoading ? (
        <div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Fade.
        </div>
      ) : ( */}
        <div className={`flex flex-col justify-center items-center w-full`}>
          
          {/* <StarsBackground /> */}
          {/* <div className="absolute right-0 top-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] z-40 gradient-quadrant rounded-bl-full">
          

            
          </div> */}

          {/* <div className="absolute right-1/2 -top-96 translate-x-1/2 w-[250px] h-[250px] md:w-full md:h-full z-40 gradient-quadrant1 rounded-full">
          

            
          </div> */}
          <Animation />
          <Hero/>
         
          <About />
        <Services1 />
        {/* <TestimonialCards /> */}
        <Projects />
        <Testimonials />
        <FAQ />
        {/* <CTA /> */}
          
        {/* <div className="absolute right-0 bottom-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] z-50 hero-gradient1 rounded-bl-full">
          

            
          </div> */}
        </div>
        
        {/* <Services /> */}
      {/* )} */}
    </>
  );
}
