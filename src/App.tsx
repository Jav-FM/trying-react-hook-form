import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  // register let us register individual inputs into the hook
  const { register, handleSubmit } = useForm();

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
