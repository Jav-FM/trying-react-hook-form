import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";
import Watch from "./Lessons/Watch";
import FormState from "./Lessons/FormState";

function App() {
  return (
    <div className="App">
      <h1>Introduction</h1>
      <Introduction />
      <h1>register</h1>
      <Register />
      <h1>watch</h1>
      <Watch />
      <h1>formState</h1>
      <FormState />
    </div>
  );
}

export default App;
