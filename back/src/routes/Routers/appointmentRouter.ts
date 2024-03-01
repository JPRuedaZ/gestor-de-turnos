import {Router} from "express";
import { getTareasAppointments } from "../../controllers/controller";
import { getTareaAppointmentId } from "../../controllers/tareas/getTarea";
const appointmentRouter = Router();


appointmentRouter.get("/", getTareasAppointments)
appointmentRouter.get("/:id", getTareaAppointmentId)
appointmentRouter.post("/schedule")
appointmentRouter.put("/cancel")
appointmentRouter.delete("/")

export default appointmentRouter;

