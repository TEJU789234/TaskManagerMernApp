import express from "express";
import validator from "../middleware/validator.js"; // Fixed path
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/userValidator.js";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js"; // Fixed path
import { authorizedRoles } from "../middleware/role.js"; // Fixed function name

const router = express.Router();

router.post(
  "/",
  requireAuth,
  authorizedRoles("admin"),
  validator(createUserSchema),
  createUser,
);
router.get("/", requireAuth, authorizedRoles("admin"), getAllUsers);
router.put(
  "/:id",
  requireAuth,
  authorizedRoles("admin"),
  validator(updateUserSchema),
  updateUser,
);
router.delete("/:id", requireAuth, authorizedRoles("admin"), deleteUser);

export default router;