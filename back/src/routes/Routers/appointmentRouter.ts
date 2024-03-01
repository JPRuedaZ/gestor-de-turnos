import {Router} from "express";
import { getTareasAppointments } from "../../controllers/controller";
import { getTareaAppointmentId } from "../../controllers/tareas/getTarea";
import { modifyAppointmentTarea } from "../../controllers/tareas/putTarea";
import { createAppointmentTarea } from "../../controllers/tareas/postTarea";
const appointmentRouter = Router();


appointmentRouter.get("/", getTareasAppointments)
appointmentRouter.get("/:id", getTareaAppointmentId)
appointmentRouter.post("/schedule", createAppointmentTarea)
appointmentRouter.put("/cancel", modifyAppointmentTarea)
appointmentRouter.delete("/")

export default appointmentRouter;

