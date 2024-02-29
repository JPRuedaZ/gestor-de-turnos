import {Router} from "express";
import {getTareasUsers} from "../../controllers/tareas/getTarea";
const userRouter = Router();


userRouter.get("/", getTareasUsers)
userRouter.get("/:id")
userRouter.post("/register")
userRouter.post("/login")
userRouter.put("/")
userRouter.delete("/")

export default userRouter;