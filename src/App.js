import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from "./components/Post";
import Rainbow from "./highordercomponent/Rainbow";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route path='/' component={Home} /> This is diplayed on each page starting with / */}
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Rainbow(App);
