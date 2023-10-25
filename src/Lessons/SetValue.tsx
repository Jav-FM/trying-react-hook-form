import { useForm } from "react-hook-form";

const SetValue = () => {
  const { register, handleSubmit, setValue } = useForm({
    //We can set this mode so, combined with shouldValidate, will change the isValid value on the formState
    mode: "onChange",
    defaultValues: {
      firstName: "",
    },
  });

  // setValue allows you to programatically update your input value
  // and also update the associated formState.

  const setValueProgramatically = () => {
    setValue("firstName", "Bill", {
      // With this we can do that isDirty of formState is set to true
      shouldDirty: true,
      // we can define that touchedFields shows this input as touched by the user
      shouldTouch: true,
      // This allows us to trigger the validation associated with that input when we set the value
      shouldValidate: true,
    });
  };

  // We can set a group of inputs if we register them as an object:

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        {/* Press this button to set the input programatically with serValue */}
        <button type="button" onClick={setValueProgramatically}>
          setValue
        </button>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SetValue;
