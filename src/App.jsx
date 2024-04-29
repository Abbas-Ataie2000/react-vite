import { useForm } from "react-hook-form";
import { Fragment, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "./components/button/button";
import { loginSchema } from "./schema/login.schema";
// import Posts from "./views/posts/posts.page";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // on leave
  useEffect(() => {
    console.log("kdkdkdk");

    return () => {
      console.log("left the component");
    };
  }, [email]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setIsLoading(true);
      const apiData = await fetch("https://jsonplaceholder.typicode.com/post", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          id: 1,
          title: data.email,
          body: data.password,
        }),
      })
        .then((response) => response.json())
        .then((json) => json);

      if (apiData) {
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input label="ABC" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        {errors.email && <p>{errors?.email?.message}</p>}
        <br />
        <input label="ABC" placeholder="Password" {...register("password")} />
        {errors.password && <p>{errors.password?.message}</p>}
        <br />
        <Button disabled={isLoading} type="submit" size={"sm"} label="Submit"></Button>
      </form>

      <br />
      {/* <Posts /> */}
    </Fragment>
  );
}
