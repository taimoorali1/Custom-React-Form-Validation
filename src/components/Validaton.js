export default function Validation(values) {
  const errors = {};

  const username_regex = /^(?=.*\d)[a-zA-Z0-9]{7,15}$/;
  const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const password_regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/;

  if (values.name === "") {
    errors.name = "Name Not Be Empty";
  } else if (!username_regex.test(values.name)) {
    errors.name =
      "Username Should be between 7 and 15 characters long, contain at least one number, and do not contain any special characters & Not Spaces";
  }

  if (values.email === "") {
    errors.email = "Email Not Be Empty";
  } else if (!email_regex.test(values.email)) {
    errors.email = "Email Should be e.g: example@gmail.com";
  }

  if (values.password === "") {
    errors.password = "Password Not Be Empty";
  } else if (!password_regex.test(values.password)) {
    errors.password =
      "Password Should be min 8 to 12 charaters .. One Uppercase and one Lowecase and one Numeric value ";
  }
  if (values.confirmpassword === "") {
    errors.confirmpassword = "Confirm Password Not Be Empty";
  } else if (values.password != values.confirmpassword) {
    errors.confirmpassword = "Passowrd and confirm password should be same";
  }

  if (values.date === "") {
    errors.date = "Date is Required";
  }
  if (values.checkbox === false) {
    errors.checkbox = "Agree to proceed";
  }
  if (values.radio === false) {
    errors.radio = "Select Radio";
  }
  if (values.file === "") {
    errors.file = "enter file";
  }
  return errors;
}
