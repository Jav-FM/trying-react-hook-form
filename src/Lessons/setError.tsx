import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  customError: string;
};

const SetError = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
    },
    // This allows us to set multiple error messages with setError to an input
    // If we dont set it, it will break at the first error
    criteriaMode: "all",
  });

  // setError let us set a custom error,
  // for example an error outside of the validation rules or an error comming from a service
  const setCustomError = () =>
    setError("firstName", { type: "custom", message: "My custom error" });

  const setCustomErrorWithFocus = () =>
    setError(
      "firstName",
      { type: "custom", message: "My custom error" },
      // This allows you to focus the input with the customError
      { shouldFocus: true }
    );

  // set multiple errors to an input (we will need the criteriaMode in line 15)
  const setMultipleErrors = () => {
    setError("firstName", {
      types: {
        test: "Test is wrong",
        test1: "Test1 is wrong",
      },
    });
  };

  // By default, those custom errors wont block de submition of the form.
  // The validation will still be agains the inputs or the schema validation declared
  // So it will ignore all those custom errors

  // If we want a custom error to avoid submition,
  // we can associate the error to a variable inside the form and not to an input:

  const setErrorThatAffectsSubmition = () => {
    setError("customError", {
      type: "custom",
      message: "Custom error that affects submition",
    });
  };

  // When trying to submit, it will see this error as an input error of an input thats missing, and will avoid submition
  // You can then clear that error con clearErrors

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input {...register("firstName")} placeholder="First Name" />
      {errors.firstName?.message && <p>{errors.firstName.message}</p>}

      {errors.firstName?.types && (
        <>
          <p>{errors.firstName?.types.test}</p>
          <p>{errors.firstName?.types.test1}</p>
        </>
      )}

      {errors.customError?.message && <p>{errors.customError.message}</p>}

      <button type="button" onClick={setCustomError}>
        Set custom error
      </button>

      <button type="button" onClick={setCustomErrorWithFocus}>
        Set custom error with focusing the input
      </button>

      <button type="button" onClick={setMultipleErrors}>
        Set multiple errors
      </button>

      <button type="button" onClick={setErrorThatAffectsSubmition}>
        Set custom error that affects submition
      </button>

      <input type="submit" />
    </form>
  );
};

export default SetError;
