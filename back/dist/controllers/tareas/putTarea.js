"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyAppointmentTarea = void 0;
const appointmentsService_1 = require("../../services/appointmentsService");
const modifyAppointmentTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const appointments = yield (0, appointmentsService_1.modifyAppointment)(parseInt(id));
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: "Turno no encontrado" });
    }
});
exports.modifyAppointmentTarea = modifyAppointmentTarea;
