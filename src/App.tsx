import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";
import Watch from "./Lessons/Watch";
import FormState from "./Lessons/FormState";
import SetValue from "./Lessons/SetValue";
import SetValueMultiple from "./Lessons/SetValueMultiple";

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
      <h1>setValue</h1>
      <SetValue />
      <h3>set multiple values with one setValue</h3>
      <SetValueMultiple />
    </div>
  );
}

export default App;
