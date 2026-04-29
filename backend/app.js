import express from "express";
import morgan from "morgan";
import taskRouter from "./src/routes/taskRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import globalErrorHandler from "./src/middleware/globalErrorHandler.js";
import notFound from "./src/middleware/notfound.js";
import authRouter from "./src/routes/authRoutes.js";  // Changed to authRoutes.js
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/tasks", taskRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.use(notFound);
app.use(globalErrorHandler);

export default app;