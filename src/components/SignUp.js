import React, { useEffect, useState } from "react";
import { validate } from "./validate";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const signupHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  return (
    <div>
      <form>
        <h2>SingUp Form</h2>
        <div>
          <label>Name</label>
          <br />
          <input
            type={"text"}
            name="name"
            value={data.name}
            onChange={signupHandler}
          />
          {errors.nameError && <span>{errors.nameError}</span>}
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type={"email"}
            name="email"
            value={data.email}
            onChange={signupHandler}
          />
          {errors.emailError && <span>{errors.emailError}</span>}
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type={"password"}
            name="password"
            value={data.password}
            onChange={signupHandler}
          />
          {errors.passwordError && <span>{errors.passwordError}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <br />
          <input
            type={"password"}
            name="password"
            value={data.confirmPassword}
            onChange={signupHandler}
          />
          {errors.confirmPasswordError && (
            <span>{errors.confirmPasswordError}</span>
          )}
        </div>
        <div>
          <input
            type={"checkbox"}
            name="policy"
            value={data.isAccepted}
            onChange={signupHandler}
          />
          <label>blah blah</label>
          {errors.isAcceptedError && <span>{errors.isAcceptedError}</span>}
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
