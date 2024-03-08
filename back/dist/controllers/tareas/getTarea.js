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
exports.getTareaAppointmentId = exports.getTareaUserId = exports.getTareaCredentials = exports.getTareasAppointments = exports.getTareasUsers = void 0;
const usersService_1 = require("../../services/usersService");
const appointmentsService_1 = require("../../services/appointmentsService");
const credentialsService_1 = require("../../services/credentialsService");
const getTareasUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
});
exports.getTareasUsers = getTareasUsers;
const getTareasAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAppointments)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: "No se encontraron turnos" });
    }
});
exports.getTareasAppointments = getTareasAppointments;
const getTareaCredentials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = yield (0, credentialsService_1.getCredentials)();
        res.status(200).json(credentials);
    }
    catch (error) {
        res.status(500).json({ message: "Error del servidor" });
    }
});
exports.getTareaCredentials = getTareaCredentials;
const getTareaUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const users = yield (0, usersService_1.searchIdUser)(parseInt(id));
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});
exports.getTareaUserId = getTareaUserId;
const getTareaAppointmentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointments = yield (0, appointmentsService_1.searchIdAppointment)(parseInt(id));
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: "Turno no encontrado" });
    }
});
exports.getTareaAppointmentId = getTareaAppointmentId;
