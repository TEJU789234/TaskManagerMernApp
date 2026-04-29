import joi from "joi";
export const createUserSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  role: joi.string().valid("user", "admin").optional(),
});

export const updateUserSchema = joi
  .object({
    name: joi.string().min(3).max(50).optional(),
    email: joi.string().email().optional(),
    password: joi.string().min(6).optional(),
    role: joi.string().valid("user", "admin").optional(),
  })
  .min(1);