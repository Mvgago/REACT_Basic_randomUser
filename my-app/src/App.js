import "./App.css";
import React from "react";
import Persons from "./components/Persons/Persons";
import RandomUser from "./components/RandomUser/RandomUser";

function App() {
  return (
    <div className="App">
      <div className="container">
        <RandomUser />
      </div>
    </div>
  );
}

export default App;