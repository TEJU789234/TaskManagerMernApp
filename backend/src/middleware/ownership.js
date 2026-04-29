import Task from "../models/Task.js";

export const checkTaskOwnership = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      const err = new Error("Task not found");
      err.status = 404;
      throw err;
    }

    // Admin can access any task
    if (req.user.role === "admin") {
      return next();
    }

    // Check ownership
    if (task.userId.toString() !== req.user.userId) {
      const err = new Error("Forbidden: You do not own this task");
      err.status = 403;
      throw err;
    }

    next();
  } catch (err) {
    next(err);
  }
};