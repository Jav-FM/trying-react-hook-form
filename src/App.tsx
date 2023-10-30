import "./App.css";
import Introduction from "./Lessons/Introduction";
import Register from "./Lessons/Register";
import Watch from "./Lessons/Watch";
import FormState from "./Lessons/FormState";
import SetValue from "./Lessons/SetValue";
import SetValueMultiple from "./Lessons/SetValueMultiple";
import Reset from "./Lessons/Reset";
import Trigger from "./Lessons/Trigger";
import SetError from "./Lessons/setError";
import HandleSubmit from "./Lessons/handleSubmit";
import ResetField from "./Lessons/ResetField";
import Unregister from "./Lessons/Unregister";
import ControllerDemo from "./Lessons/Controller";
import UseFieldArray from "./Lessons/UseFieldArray";

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
      <h2>trigger</h2>
      <Trigger />
      <h2>setError</h2>
      <SetError />
      <h2>handleSubmit</h2>
      <HandleSubmit />
      <h2>resetField</h2>
      <ResetField />
      <h2>unregister</h2>
      <Unregister />
      <h2>Controller</h2>
      <ControllerDemo />
      <h2>useFieldArray</h2>
      <UseFieldArray />
    </div>
  );
}

export default App;
