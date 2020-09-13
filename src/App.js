import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import StateComp from "./stateCom";
import Cards from "./components/cards";
import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Cards} />
        <Route exact path="/resume" component={Resume} />
      </BrowserRouter>
      {/* <Cards /> */}
      {/* <h1>Hello APSSDC</h1>
      <p>Welcome to ReactJS course</p> */}

      {/* <Header name="Rahul">
        <p>i'm Learning HTML5</p>
        <h1>Rahul say im perfect</h1>
      </Header>

      <Header name=" Surpiya ">
        <p>i'm Learning CSS3</p>
      </Header>

      <Header name="Sai Krishna">
        <p>i'm Learning Bootstrap</p>
      </Header>

      <Header name="Lavanya ">
        <p>i'm Learning JavaScript</p>
      </Header> */}
      {/* <StateComp></StateComp> */}
    </div>
  );
}

export default App;
