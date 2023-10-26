import { useForm } from "react-hook-form";

const Introduction = () => {
  const {
    // register function let us register individual inputs into the hook
    register,
    handleSubmit,
    //The watch function let us subscribe to the inputs to trigger something when they change
    // If we dont pass any argument, it subscribes to the entire form
    //If you want to subscribe to a specific input you pass the name as an argument
    //Every keystroke will trigger a re-render
    watch,
    // Through formState we can get the errors from all inputs
    formState: { errors },
  } = useForm(
    //As props of useForm you can define initial values
    //Its recomended to always give initial values, even if they are ""
    //That way typescript will spect those properties inside form values
    {
      defaultValues: {
        firstName: "Bill",
        lastName: "Gates",
      },
    }
  );

  console.log(watch());

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {/* We can add individual requirements for each input 
        using an object as second parameter of register function */}
      <input
        {...register("firstName", { required: true, minLength: 4 })}
        placeholder="First Name"
      />
      {/* We can include a message in the require variable, that will be
        used as the error message when an error exists. We can also do so with minLenght */}
      <input
        {...register("lastName", {
          required: "This field is required.",
          minLength: { value: 4, message: "Min length is 4" },
        })}
        placeholder="Last Name"
      />
      {/* This way we can identify if there are errors and show them */}
      {errors.lastName && <p>{errors.lastName?.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default Introduction;
