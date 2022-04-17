import React, { useState } from "react";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const signupHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }

    console.log(data);
  };

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
        </div>
        <div>
          <input
            type={"checkbox"}
            name="policy"
            value={data.isAccepted}
            onChange={signupHandler}
          />
          <label>blah blah</label>
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
