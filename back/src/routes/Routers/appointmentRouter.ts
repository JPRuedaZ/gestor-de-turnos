import {Router} from "express";
import { getTareasAppointments } from "../../controllers/tareas/getTarea";
const appointmentRouter = Router();


appointmentRouter.get("/", getTareasAppointments)
appointmentRouter.get("/:id")
appointmentRouter.post("/schedule")
appointmentRouter.put("/cancel")
appointmentRouter.delete("/")

export default appointmentRouter;

