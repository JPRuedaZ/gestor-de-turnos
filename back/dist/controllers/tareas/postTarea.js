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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createAppointmentTarea = exports.createUserTarea = void 0;
const usersService_1 = require("../../services/usersService");
const appointmentsService_1 = require("../../services/appointmentsService");
const credentialsService_1 = require("../../services/credentialsService");
const emailMessage_1 = __importDefault(require("../../utils/emailMessage"));
const createUserTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCred = req.body;
        const credentials = yield (0, usersService_1.createUser)(newCred);
        (0, emailMessage_1.default)(newCred.email);
        res.status(201).json(credentials);
    }
    catch (error) {
        res.status(400).json(`Mensaje de ${error}`);
    }
});
exports.createUserTarea = createUserTarea;
const createAppointmentTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAppointment = req.body;
        const appointments = yield (0, appointmentsService_1.createAppointment)(newAppointment);
        res.status(201).json(appointments);
    }
    catch (error) {
        res.status(404).json(`Mensaje de ${error}`);
    }
});
exports.createAppointmentTarea = createAppointmentTarea;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credential = yield (0, credentialsService_1.validarCredenciales)({ username, password });
        if (credential === null)
            throw new Error("Credenciales incorrectas");
        const user = yield (0, usersService_1.findUserByCredentialId)(credential.id);
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json(`Mensaje de ${error}`);
    }
});
exports.login = login;
