import {Router} from "express";
import appointmentRouter from "./Routers/appointmentRouter";
import userRouter from "./Routers/userRouter";



const router: Router = Router();

router.use("/users",userRouter);
router.use("/appointments",appointmentRouter)



export default router;