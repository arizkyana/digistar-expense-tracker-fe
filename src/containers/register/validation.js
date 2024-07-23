import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string().required(),
  username: Yup.string().min(5).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), ""],
    "Password harus sama"
  ),
});
