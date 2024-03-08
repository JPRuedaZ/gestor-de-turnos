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
exports.modifyAppointment = exports.createAppointment = exports.searchIdAppointment = exports.getAppointments = void 0;
const RAppointments_1 = require("../repositories/RAppointments");
const usersService_1 = require("./usersService");
const getAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataA = yield RAppointments_1.appointmentRepository.find({
        relations: {
            user: true
        }
    });
    return dataA;
});
exports.getAppointments = getAppointments;
const searchIdAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield RAppointments_1.appointmentRepository.find({ where: { id }, relations: { user: true } });
    if (!appointment)
        throw new Error("Turno no encontrado");
    return appointment;
});
exports.searchIdAppointment = searchIdAppointment;
const createAppointment = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, usersService_1.searchIdUser)(appointmentData.userId);
    const newTurn = yield RAppointments_1.appointmentRepository.create(appointmentData);
    if (user) {
        newTurn.user = user;
    }
    yield RAppointments_1.appointmentRepository.save(newTurn);
    return newTurn;
});
exports.createAppointment = createAppointment;
const modifyAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield RAppointments_1.appointmentRepository.findOneBy({ id });
    if (appointment !== null) {
        appointment.status = 'Cancelled';
    }
    else {
        throw new Error("Turno no encontrado");
    }
    yield RAppointments_1.appointmentRepository.save(appointment);
    return appointment;
});
exports.modifyAppointment = modifyAppointment;
