"use client"

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import Highlights from "./components/Highlights";
/* import FeaturedProject from "./home/components/FeaturedProject";
import Contact from "./home/components/Contact";
import Footer from "./home/components/Footer"; */

export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Hero />
      <Highlights />
      <Awards />
      <Contact />
      {/* <FeaturedProject />
      <Footer /> */}
      <footer className="py-4 flex justify-center items-center">
        <small className="text-center">
          Fritz Baffoe {new Date().getFullYear()} &copy; All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}
