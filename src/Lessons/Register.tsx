import { useForm } from "react-hook-form";

// Its recommended to define the types for the form structure
type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
};

const Register = () => {
  const {
    // register function let us register individual inputs into the hook
    register,
    handleSubmit,
    formState: { errors },
    // Its recommended to define the types for the form structure
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });

  // Syntax of register API
  // First argument is income name:
  // register('test')
  // If you need register to create a more complex structure of data, as array of object
  // you can pass the first argument ass so. For ex:
  // register('testObject.testElement') will create a data structure of an object with an undefined element called testElement
  // register('testArray.0') will create an array with one undefined element

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
            //We can use this structure on require to be more consistent with the API
            required: { value: true, message: "This field is required." },
            minLength: { value: 4, message: "Min length is 4" },
            //For more flexibility in the validation we can use validate
            //You can add any logic, you can even do async validations adding the "async" reserved word to the function
            validate: (value) => {
              return value === "Bill" || "You can only use Bill as first name";
            },
          })}
          placeholder="First Name"
        />
        {errors.firstName && <p>{errors.firstName?.message}</p>}
        <input
          {...register("lastName", {
            required: { value: true, message: "This field is required." },
            minLength: { value: 4, message: "Min length is 4" },
          })}
          placeholder="Last Name"
        />
        {errors.lastName && <p>{errors.lastName?.message}</p>}
        {/* We can define the type of value we want the input to return,
          for example here, even when an input with type number always returns a string,
          we can define it to return a number */}
        <input type="number" {...register("age", { valueAsNumber: true })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
