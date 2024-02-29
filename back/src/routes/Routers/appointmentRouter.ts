import {Router} from "express";
const appointmentRouter = Router();


appointmentRouter.get("/")
appointmentRouter.get("/:id")
appointmentRouter.post("/schedule")
appointmentRouter.put("/cancel")
appointmentRouter.delete("/")

export default appointmentRouter;

