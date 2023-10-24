import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Watch = () => {
  const { register, handleSubmit, watch } = useForm();

  //watch allows us to subscribe to the form or part of it so we can have a re-render,
  // just as the useState does in pure react.
  // It returns the actual values of the input, inputs or form,
  // depending on what we pass as a parameter
  // *** THE RE-RENDER HAPPEND IN THE ROOT OF THE FORM, WERE WE HAVE THE USEFORM()

  // We can subscribe to all the form, invoking watch() without a parameter,
  // so every keystroke in any input will generate a re-render
  // and it will return all the values of the form
  console.log("formValuesNow", watch());

  //And we can for example save it into a variable that will change with every change of the form:
  const myFormValuesAtDate = watch();

  // We can also subscribe to an specific input using a parameter,
  // Ant it will return the value of that input. for ex:
  console.log("firstNameValueNow", watch("firstName"));

  // We can also subscribe to a group of inputs through an array,
  // An it will return the value of those inputs as an array:
  console.log("firstAndLastNameValuesNow", watch(["firstName", "lastName"]));

  // watch its a function, the first time its executed it hasn't reached the
  // rendered form, so the first time it will show "undefined" as value.
  // To avoid that we can pass a default value as a second argument, for ex:
  console.log("firstNameValueNowWithDefault", watch("firstName", "Bill"));
  // But the even better way to solve that is passing defaultValues to our form as seeing before.
  // With that, we wont need that second argument.

  // TO MANAGE THE RE-RENDER IN A COMPONENT LEVEL, AND NOT IN THE ROOT:
  // we use the useWatch() hook. It allows us to have the re-render where we want, in any component.

  // USING WATCH FOR EXCECUTING A USEEFFECT
  // If we dont want a re-render, but allows us to subscribing to the whole app
  // without any re-render at all

  useEffect(() => {
    const subscription = watch((data) => {
      console.log(data);
    });

    //We then unsubscribe to that, when the component gets embedded:
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  //This is very usefull for example when we whant to use an analytic tool,
  // as google analytics, and you want that tool to be aware of the changes of the form,
  // but you dont want a re-render each time that changes occurs.

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Watch;
