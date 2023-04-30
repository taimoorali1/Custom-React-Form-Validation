import Validation from "./Validaton";
import { useState } from "react";

function FormPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    checkbox: false,
    radio: false,
    file: "",
  });

  function HandleData(event) {
    const setObj = { ...values, [event.target.name]: event.target.value };
    setValues(setObj);
  }

  const [errors, setErrors] = useState({});

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  function callApi() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="Main_Container">
      <div className="Validation_form">
        <h4>Form Validation With React </h4>
        <div className="form">
          <form onSubmit={handleValidation}>
            <label htmlFor="username" className="mt-4">
              Name
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              name="name"
              className="form-control"
              onChange={HandleData}
            />
            {errors.name && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.name}
              </p>
            )}
            {/* Birth Part */}
            <label htmlFor="userbirth" className="mt-4">
              Birth
            </label>
            <input
              id="userbirth"
              type="date"
              name="date"
              className="form-control"
              onChange={HandleData}
            />
            {errors.date && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.date}
              </p>
            )}
            {/* Email PArt */}
            <label htmlFor="useremail" className="mt-4">
              Email Address
            </label>
            <input
              id="useremail"
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control"
              onChange={HandleData}
            />
            {errors.email && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
            {/* PAssword Part */}
            <label htmlFor="userpassword" className="mt-4">
              Password:
            </label>
            <input
              id="userpassword"
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control"
              onChange={HandleData}
            />
            {errors.password && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.password}
              </p>
            )}
            {/* confirmPAssword Part */}
            <label htmlFor="confirmpassword" className="mt-4">
              Confirm Password:
            </label>
            <input
              id="confirmpassword"
              type="password"
              placeholder="Enter Password"
              name="confirmpassword"
              className="form-control"
              onChange={HandleData}
            />
            {errors.confirmpassword && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.confirmpassword}
              </p>
            )}

            {/* file Part */}
            <label htmlFor="file" className="mt-4">
              Enter file
            </label>
            <input
              id="confirmpassword"
              type="file"
              placeholder="Enter file"
              name="file"
              className="form-control"
              onChange={HandleData}
            />
            {errors.file && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.file}
              </p>
            )}

            {/* checkbox Part */}

            <label>
              <input name="checkbox" type="checkbox" onChange={HandleData} />I
              agree to the terms and conditions
            </label>
            {errors.checkbox && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.checkbox}
              </p>
            )}
            <br />
            {/* radio Part */}

            <label>
              <input name="radio" type="radio" onChange={HandleData} />I am
              Radio btn
            </label>
            {errors.radio && (
              <p className="mb-0" style={{ color: "red" }}>
                {errors.radio}
              </p>
            )}

            <div className="mt-3">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={callApi()}
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
