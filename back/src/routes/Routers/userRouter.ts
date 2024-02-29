import {Router} from "express";
const userRouter = Router();


userRouter.get("/")
userRouter.get("/:id")
userRouter.post("/register")
userRouter.post("/login")
userRouter.put("/")
userRouter.delete("/")

export default userRouter;