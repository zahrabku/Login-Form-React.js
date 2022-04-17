const validate = (data) => {
  let errors = {
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    isAcceptedError: "",
  };

  if (!data.name.trim()) {
    errors.nameError = "Username required";
  } else {
    delete errors.nameError;
  }

  if (!data.email) {
    errors.emailError = "Email required";
  } else if (!/\s+@\s+\.\s+/.test(data.email)) {
    errors.emailError = "Invalid email address";
  } else {
    delete errors.emailError;
  }

  if (!data.password) {
    errors.passwordError = "Password required";
  } else if (data.password.length < 6) {
    errors.passwordError = "Password should be longer than 6 character";
  } else {
    delete errors.passwordError;
  }

  if (!data.confirmPassword) {
    errors.confirmPasswordError = "confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPasswordError = "password not matching";
  } else {
    delete errors.confirmPasswordError;
  }

  if (data.isAcepted) {
    delete errors.isAcceptedError;
  } else {
    errors.isAcceptedError = "Do you accept our policy?";
  }

  return errors;
};
