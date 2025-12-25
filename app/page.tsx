"use client";

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FlowSection from "@/components/FlowSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { StarIcon } from "@/components/Icons";
import { MeteorsDemo } from "@/components/MeteorCTA";
import MultiCloudChallenge from "@/components/MultiCloudChallenge";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { SparklesCore } from "@/components/ui/sparkles";

const App = () => {
  return (
    <main>
      <Hero />
       <section className="relative bg-black">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          particleColor="#0c8ce9"
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10">
          <MultiCloudChallenge />
          <FlowSection />
        </div>
      </section>
      
      <Pricing />
      <FAQ />
      {/* <CTA /> */}
      

      <MeteorsDemo/>
      
      <Footer />


    </main>
  );
};
export default App;
