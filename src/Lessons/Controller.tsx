import { useForm } from "react-hook-form";

const Controller = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  return <input {...register("firstName")} placeholder="First Name" />;
};

export default Controller;
