import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

const HandleSubmit = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // The onSubmit function can be async if we need to ask to a service during the submit process
  const onSubmit = (
    data: FormValues,
    //Here you can get event as a second argument if you need it
    event: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    console.log("here");
    event?.preventDefault();
    console.log(data);
  };

  // An example of an async submit
  //   const onAsyncSubmit = async (data: FormValues) => {
  //     try {
  //       await fetch("My url");
  //     } catch (e) {
  //       setError("service", {
  //         type: "serverSideError",
  //         message: "Server error message",
  //       });
  //     }
  //   };

  const onError = () => {
    console.log("Something wrong");
  };

  return (
    <form
      className="form"
      // It recibe to arguments, first one for submiting and the second one for when there is an error
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />

      {/* A disabled input will bring "undefined" as value on the submited data */}
      <input
        {...register("lastName", { disabled: true })}
        placeholder="Last Name"
      />

      <input type="submit" />
    </form>
  );
};

export default HandleSubmit;
