import joi from "joi";
export const createTaskSchema = joi.object({
  title: joi.string().min(3).max(100).required(),
  description: joi.string().optional().allow(""),
status: joi.string().valid("pending", "in_progress", "completed").optional(),
  priority: joi.string().valid("low", "medium", "high", "urgent").default("medium"),
  dueDate: joi.date().optional().allow(null),
  userId: joi.string().optional(), // or joi.number() depending on your ID type
});

export const updateTaskSchema = joi
  .object({
    title: joi.string().min(3).max(100).optional(),
    description: joi.string().max(500).optional(),
status: joi.string().valid("pending", "in_progress", "completed").optional(),
    priority: joi.string().valid("low", "medium", "high", "urgent").optional(),
    dueDate: joi.date().optional(), //allow null
    userId: joi.string().optional(), // or joi.number() depending on your ID type
  })
  .min(1);