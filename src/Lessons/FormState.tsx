import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormState = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: {
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
      isValid,
      errors,
    },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // isDirty: boolean value which indicates whether your form is being changed from your default value
  // It needs defaultValues to work fine
  console.log("isDirty", isDirty);
  // dirtyFields: object which indicates every individual inputs that has been changed and marked them as a boolean when they changed.
  console.log("dirtyFields", dirtyFields);
  // touchedFields: objects of inputs that gets focused and blurred by the user
  console.log("touchedFields", touchedFields);
  // isSubmitted: boolean that tells if the form was submitted
  console.log("isSubmitted", isSubmitted);
  // isSubmittedSuccessful: will only be true if the error gets submitted without errors
  console.log("isSubmitSuccessful", isSubmitSuccessful);
  // isSubmitting: means some kind of asynchronous action is happening and its submitting the form.
  // It pass to true while an async behavior is happening inside the handleSubmit function
  // submitCount: number of times the form was submitted
  console.log("submitCount", submitCount);
  // isValid: true means that all rules in the form are being accompliche without errors
  // it happens on every key stroke
  console.log("isValid", isValid);
  // isValidating: is true when individual inputs are triyng to validate at asyncrhonous level
  // it pass to true when an async behavior is happening while validating an input
  // errors: object with errors made by the user
  console.log("errors", errors);

  // If you want to be aware of formState through an useEffect
  useEffect(() => {
    console.log("useEffect showing formState", formState);
  }, [formState]);

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "Is required" })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: "Is required" })}
          placeholder="Last Name"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormState;
