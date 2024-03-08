"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRepository = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
exports.appointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment);
