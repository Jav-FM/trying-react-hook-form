import { useForm, useWatch, Control, useFieldArray } from "react-hook-form";

type FormValues = {
  cart: {
    name: string;
    amount: number;
  }[];
};

// useFieldArray is a custom hook for working with dynamic form.

const getTotal = (payload: FormValues["cart"]) => {
  let total = 0;
  for (const item of payload) {
    total = total + (Number.isNaN(item.amount) ? 0 : item.amount);
  }
  return total;
};

const TotalAmount = ({ control }: { control: Control<FormValues> }) => {
  const cartValues = useWatch({
    control,
    name: "cart",
  });

  return <p>Total amount: {getTotal(cartValues)}</p>;
};

const UseFieldArray = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "", amount: 0 }],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {fields.map((field, index) => {
        return (
          <section
            key={field.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>
              Name
              <input {...register(`cart.${index}.name`, { required: true })} />
            </label>
            <label>
              Amount
              <input
                type="number"
                {...register(`cart.${index}.amount`, { valueAsNumber: true })}
              />
            </label>

            {/* remove need and index and it removes the fields with that index */}
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </section>
        );
      })}
      <div style={{ marginTop: "20px" }}></div>
      {/* append includes new fields on the bottom of the array */}
      <button
        type="button"
        onClick={() =>
          append({
            name: "appendedField",
            amount: 0,
          })
        }
      >
        Append
      </button>
      {/* prepend includes new fields on the top of the array */}
      <button
        type="button"
        onClick={() =>
          prepend({
            name: "prependedField",
            amount: 0,
          })
        }
      >
        Prepend
      </button>

      <TotalAmount control={control} />

      {errors.cart && <p>{errors.cart[0]?.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFieldArray;
