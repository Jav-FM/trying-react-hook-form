import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";
import Watch from "./Lessons/Watch";
import FormState from "./Lessons/FormState";
import SetValue from "./Lessons/SetValue";
import SetValueMultiple from "./Lessons/SetValueMultiple";
import Reset from "./Lessons/Reset";

function App() {
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <h2>Introduction</h2>
      <Introduction />
      <h2>register</h2>
      <Register />
      <h2>watch</h2>
      <Watch />
      <h2>formState</h2>
      <FormState />
      <h2>setValue</h2>
      <SetValue />
      <h3>set multiple values with one setValue</h3>
      <SetValueMultiple />
      <h2>reset</h2>
      <Reset />
    </div>
  );
}

export default App;
