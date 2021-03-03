import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./page/Home";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="home">
      <Router>
        <Header />
        <HomePage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
