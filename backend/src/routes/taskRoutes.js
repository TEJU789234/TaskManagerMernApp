import express from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
import validator from "../middleware/validator.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/taskValidator.js";
import { checkTaskOwnership } from "../middleware/ownership.js";
import { requireAuth } from "../middleware/auth.js";
import { authorizedRoles } from "../middleware/role.js";

const router = express.Router();

// Apply requireAuth to all routes
router.use(requireAuth);

router.get("/", getAllTasks);
router.get("/:id", checkTaskOwnership, getTaskById);
router.post("/", validator(createTaskSchema), createTask);
router.put("/:id", checkTaskOwnership, validator(updateTaskSchema), updateTask);
router.delete("/:id", checkTaskOwnership, deleteTask);

export default router;