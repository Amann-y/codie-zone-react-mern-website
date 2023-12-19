const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email Is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email Must Be At least 3 Characters" })
    .max(255, { message: "Email Should Not Be More Than 255 Characters" }),

  password: z
    .string({ required_error: "Password Is Required" })
    .trim()
    .min(7, { message: "Password Must Be At least of 7 Characters" })
    .max(255, { message: "Password Should Not Be More Than 255 Characters" }),
});

const signUpSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name Is Required" })
    .trim()
    .min(3, { message: "Name Should Be At Least 3 Characters" })
    .max(255, { message: "Name Should Not Be More Than 255 Characters" }),

  phone: z
    .string({ required_error: "Phone Is Required" })
    .trim()
    .min(10, { message: "Phone Number Must Be At least of 10 Digits" })
    .max(20, { message: "Phone Number Should Not Be More Than 20 Digits" }),
});

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name Is Required" })
    .trim()
    .min(3, { message: "Name Should Be At Least 3 Characters Long" })
    .max(255, { message: "Name Should Not Be More Than 255 Characters" }),

  email: z
    .string({ required_error: "Email Is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email Must Be At least 3 Characters" })
    .max(255, { message: "Email Should Not Be More Than 255 Characters" }),

  message: z
    .string({ required_error: "Message Is Required" })
    .trim()
    .min(5, { message: "Message Should Be At Least 5 Characters Long" })
    .max(500, { message: "Message Should Not Be More Than 500 Characters" }),
});

module.exports = { signUpSchema, loginSchema, contactSchema };
