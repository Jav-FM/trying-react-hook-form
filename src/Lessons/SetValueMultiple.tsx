import { useForm } from "react-hook-form";

const SetValueMultiple = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      yourDetails: {
        firstName: "",
        lastName: "",
      },
    },
  });

  // We can set a group of inputs if we register them as an object:
  const setValuesProgramatically = () => {
    setValue("yourDetails", {
      firstName: "Bill",
      lastName: "Gates",
    });
    // This will be the same as doing this:
    // setValue('yourDetails.firstName', 'Bill');
    // setValue('youtDetails.lastName', 'Gates')
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
          {...register("yourDetails.firstName")}
          placeholder="First Name"
        />
        <input {...register("yourDetails.lastName")} placeholder="First Name" />
        {/* Press this button to set the input programatically with setValue */}
        <button type="button" onClick={setValuesProgramatically}>
          setValue
        </button>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SetValueMultiple;
