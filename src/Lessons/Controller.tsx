import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type InputProps = {
  value?: string;
  name: string;
  onChange?: Function;
};

// Controller allows us to take control of controlled components
// (for example those from libraries or other components)
// Here we have an example of a controlled input:

const ControlledInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value || "");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
  };

  return (
    <input placeholder={props.name} value={value} onChange={handleOnChange} />
  );
};

// This is the Controller syntax;
// const Controller = ({ control, register, name, rules, render }) => {
//   const value = useWatch({
//     control,
//     name,
//   });
//   const props = register(name, rules);
//   return render({
//     value,
//     onChange: (e) =>
//       props.onChange({
//         target: {
//           name,
//           value: e.target.value,
//         },
//       }),
//     onBlur: props.onBlur,
//     name: props.name,
//   });
// };

const ControllerDemo = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field }) => <ControlledInput {...field} />}
      />

      <input type="submit" />
    </form>
  );
};

export default ControllerDemo;
