import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BusinessScreen from "./screens/BusinessScreen";
import BusinessScreens from "./screens/BusinessScreens.js";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import UserListScreen from "./screens/UserListScreen";
import BusinessListScreen from "./screens/BusinessListScreen.js";
import BusinessEditScreen from "./screens/BusinessEditScreen.js";
import "./App.css";
import TestScreen from "./screens/TestScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/business/:id" component={BusinessScreens} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/businesslist" component={BusinessListScreen} />
            <Route
              path="/admin/business/:id/edit"
              component={BusinessEditScreen}
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
