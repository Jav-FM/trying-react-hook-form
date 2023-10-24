import React from "react";
import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";

function App() {
  return (
    <div className="App">
      <h1>Introduction</h1>
      <Introduction />
      <h1>register</h1>
      <Register />
    </div>
  );
}

export default App;
