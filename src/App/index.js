import React, { useState } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./router";
import Error from "./page/Error";
import Popup from "./components/Popup";
function App() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="home">
      <Router>
        <button className="btn-show-popup" onClick={() => setPopup(true)}>
          POP
        </button>
        {popup && <Popup close={setPopup} />}
        <Header />
        <Switch>
          {routers.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
