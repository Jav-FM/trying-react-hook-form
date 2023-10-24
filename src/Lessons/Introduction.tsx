import { useForm } from "react-hook-form";

const Introduction = () => {
  // register function let us register individual inputs into the hook
  // Through formState we can get the errors from all inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="App">
      <form
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default Introduction;
