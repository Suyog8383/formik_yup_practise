import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be 3 characters or more")
    .required("Required"),
  lastName: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
});
