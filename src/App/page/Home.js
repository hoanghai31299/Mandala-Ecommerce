import React from "react";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";
import ImageGrid from "../components/ImageGrid";
import HomeFooter from "../components/HomeFooter";
function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Banner />
      <ImageGrid />
      <HomeFooter />
    </div>
  );
}

export default Home;
