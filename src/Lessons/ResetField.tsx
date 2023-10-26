import { useForm } from "react-hook-form";

const ResetField = () => {
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // ResetField works on an individual field level, while reset works at form level
  const resetFirstName = () => {
    resetField("firstName");
  };

  // The difference between this and clearing one input with reset,
  // is that in this case only the affected input will change it formState

  // You can add props like keepError, which will keep the existing error in the field
  // resetField('firstName', {keepError: true})

  // We can also use keepDirty so the field keep dirty even when we reset it
  // resetField('firstName', {keepDirty: true})

  // We can use touchedFields so the field will be marked as touched even after the reset
  // resetField('firstName', {touchedFields: true})

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input {...register("firstName")} placeholder="First Name" />

      <input {...register("lastName")} placeholder="Last Name" />

      <button type="button" onClick={resetFirstName}>
        Reset first name
      </button>

      <input type="submit" />
    </form>
  );
};

export default ResetField;
