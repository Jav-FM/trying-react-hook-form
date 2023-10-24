import React from "react";
import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";
import Watch from "./Lessons/Watch";

function App() {
  return (
    <div className="App">
      <h1>Introduction</h1>
      <Introduction />
      <h1>register</h1>
      <Register />
      <h1>watch</h1>
      <Watch />
    </div>
  );
}

export default App;
