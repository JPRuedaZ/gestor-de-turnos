import {Router} from "express";
import {getTareasUsers} from "../../controllers/controller";
import { createUserTarea } from "../../controllers/tareas/postTarea";
import { getTareaUserId } from "../../controllers/tareas/getTarea";
const userRouter = Router();


userRouter.get("/",getTareasUsers)
userRouter.get("/:id", getTareaUserId)
userRouter.post("/register",createUserTarea)
userRouter.post("/login")
userRouter.put("/")
userRouter.delete("/")

export default userRouter;