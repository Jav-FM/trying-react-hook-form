import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Reset = () => {
  const { register, handleSubmit, reset, formState, getValues } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // To go back to default values
  const simpleReset = () => {
    reset();
  };

  // Update the defaultValue and reset to that new default value
  const resetChangingDefault = () => {
    reset({
      firstName: "Bill",
      lastName: "Gates",
    });
  };

  // Reseting to values different from default values, but without updating the default values
  // The form will remaind dirty
  const resetKeepingDefault = () => {
    reset(
      {
        firstName: "Tom",
        lastName: "Cruise",
      },
      { keepDefaultValues: true }
    );
  };

  // To reset the form parcially (only some values)
  const resetParcially = () => {
    reset({
      ...getValues(),
      lastName: "reseted",
    });
  };

  // Other options:
  // KeepErrors: Does the reset without cleaning the existing errors
  // KeepDirty: Remain dirty in true while reseting
  // KeepValues: Will change the content of the input but not the values of the form

  // The correct way to reset after a successfully submit
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <button onClick={simpleReset}>Simple reset</button>
        <button onClick={resetChangingDefault}>
          Reset changing default values
        </button>
        <button onClick={resetKeepingDefault}>
          Reset to another value withouw changing default values
        </button>
        <button onClick={resetParcially}>Reset only lastName</button>
        <button type="submit">Submit and reset</button>
      </form>
    </div>
  );
};

export default Reset;
