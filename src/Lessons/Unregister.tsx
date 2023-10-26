import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  checkbox1: boolean;
  checkbox2: boolean;
};

const Unregister = () => {
  const { register, handleSubmit, watch, unregister } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      checkbox1: false,
      checkbox2: false,
    },
    // with this option in true, the unmounted inputs get their values demolished
    // the default value is false, so by default when you unmount a unique input its value remainds
    // shouldUnregister: true,
  });

  // unregister allows you to remove the inputs out from the registration

  const checkbox1 = watch("checkbox1");
  const firstName = watch("firstName");

  const checkbox2 = watch("checkbox2");
  const lastName = watch("lastName");

  // We will need to do the unregister inside of an useEffect,
  // because if we do it inside the render, the unregister will trigger
  // another rerender
  useEffect(() => {
    if (checkbox2) {
      unregister("lastName");
    }
  }, [unregister, checkbox2]);

  // We can use properties inside unregister,
  //for example keepError that will keep existing errors related with that input
  // unregister('lastName', {keepError: true})
  // Other posible properties: keepDirty, keepTouched, keepValid, keepValue, keepDefaultValue

  //You can unregister a group of inputs by ussing an array of inputs
  // unregister(['firstName', 'lastName'])

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {!checkbox1 && (
        <input {...register("firstName")} placeholder="First Name" />
      )}

      <label>
        <input type="checkbox" {...register("checkbox1")} />
        Hide firstName input remainding its value
      </label>

      <p>firstName current value: {`${firstName}`}</p>

      {!checkbox2 && (
        <input {...register("lastName")} placeholder="Last Name" />
      )}

      <label>
        <input type="checkbox" {...register("checkbox2")} />
        Hide firstName input and unregister its value
      </label>

      <p>lastName current value: {`${lastName}`}</p>

      <input type="submit" />
    </form>
  );
};

export default Unregister;
