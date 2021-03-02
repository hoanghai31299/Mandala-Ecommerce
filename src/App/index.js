import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <div className="home">
      <Router>
        <Header />
        <div className="home">Home Page</div>
        <Footer />
      </Router>
    </div>
  );
}

export default HomePage;
