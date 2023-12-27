import React from "react";
import { useFormik } from "formik";
import { userLoginSchema } from "../validation/Auth/authSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const Login = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userLoginSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      {touched.firstName && errors.firstName ? (
        <div>{errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      {touched.lastName && errors.lastName ? (
        <div>{errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email ? <div>{errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
