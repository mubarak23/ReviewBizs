import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BusinessScreen from "./screens/BusinessScreen";
import BusinessScreens from "./screens/BusinessScreens";
import Home from "./screens/Home";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" exact component={HomeScreen} />

            <Route path="/business/:id" component={BusinessScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
