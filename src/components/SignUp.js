import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const signupHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("signed in!", "success");
    } else {
      notify("invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>SingUp Form</h2>
        <div>
          <label>Name</label>
          <br />
          <input
            type={"text"}
            name="name"
            value={data.name}
            onChange={signupHandler}
            onFocus={focusHandler}
          />
          {errors.nameError && touched.name && <span>{errors.nameError}</span>}
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type={"email"}
            name="email"
            value={data.email}
            onChange={signupHandler}
            onFocus={focusHandler}
          />
          {errors.emailError && touched.email && (
            <span>{errors.emailError}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type={"password"}
            name="password"
            value={data.password}
            onChange={signupHandler}
            onFocus={focusHandler}
          />
          {errors.passwordError && touched.password && (
            <span>{errors.passwordError}</span>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <br />
          <input
            type={"password"}
            name="password"
            value={data.confirmPassword}
            onChange={signupHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPasswordError && touched.confirmPassword && (
            <span>{errors.confirmPasswordError}</span>
          )}
        </div>
        <div>
          <input
            type={"checkbox"}
            name="policy"
            value={data.isAccepted}
            onChange={signupHandler}
            onFocus={focusHandler}
          />
          <label>blah blah</label>
          {errors.isAcceptedError && touched.isAccepted && (
            <span>{errors.isAcceptedError}</span>
          )}
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
