import { useForm } from "react-hook-form";

const Trigger = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      profession: "",
    },
  });

  // To trigger one input validation
  const triggerFirstNameValidations = () => {
    trigger("firstName");
  };

  // To trigger a group of input validations
  const triggerBothValidations = () => {
    trigger(["firstName", "lastName"]);
  };

  // To trigger all validations in the form
  const triggerAllValidations = () => {
    trigger();
  };

  // Return the boolean value of the validation on the fly
  // You need to transform the function intro asynchronous
  const triggerWithGettingValues = async () => {
    const output = await trigger();
    console.log("output", output);
  };

  // Focus on the first input with the error
  // It will need you to pass the reference of the inputs to work fine
  const triggerAndFocusFirstInputWithError = () => {
    trigger(["firstName", "lastName", "profession"], { shouldFocus: true });
  };

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", {
            required: "This field is required.",
            minLength: { value: 6, message: "Min length is 6" },
          })}
          placeholder="First Name"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input
          {...register("lastName", {
            required: "This field is required.",
            minLength: { value: 6, message: "Min length is 6" },
          })}
          placeholder="Last Name"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input
          {...register("profession", {
            required: "This field is required.",
            minLength: { value: 6, message: "Min length is 6" },
          })}
          placeholder="Last Name"
        />
        {errors.profession && <p>{errors.profession.message}</p>}

        <button type="button" onClick={triggerFirstNameValidations}>
          Trigger First Name Validations
        </button>

        <button type="button" onClick={triggerBothValidations}>
          Trigger First and Last names Validations
        </button>

        <button type="button" onClick={triggerAllValidations}>
          Trigger all Validations
        </button>

        <button type="button" onClick={triggerWithGettingValues}>
          Trigger all and get boolean value of validation on console
        </button>

        <button type="button" onClick={triggerAndFocusFirstInputWithError}>
          Trigger all and focus first input with error
        </button>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Trigger;
