import React from "react";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";
import ImageGrid from "../components/ImageGrid";
import HomeFooter from "../components/HomeFooter";
import SliderFeedback from "../components/SliderFeedback";
import SliderProduct from "../components/SliderProduct";

function Home() {
  return (
    <div className="home">
      {/* <BreadCrumb links={arr} /> */}
      <HeroSection />
      <Banner />
      <ImageGrid />
      <SliderFeedback />
      <SliderProduct />
      <HomeFooter />
    </div>
  );
}

export default Home;
