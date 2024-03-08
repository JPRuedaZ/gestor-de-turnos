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
exports.validarCredenciales = exports.createCredentials = exports.getCredentials = void 0;
const RCredentials_1 = require("../repositories/RCredentials");
const getCredentials = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataC = yield RCredentials_1.credentialRepository.find();
    return dataC;
});
exports.getCredentials = getCredentials;
// FUNCION DE SERVICIOS CREAR CREDENCIALES
const createCredentials = (dataC) => __awaiter(void 0, void 0, void 0, function* () {
    const newCred = RCredentials_1.credentialRepository.create(dataC);
    yield RCredentials_1.credentialRepository.save(newCred);
    return newCred;
});
exports.createCredentials = createCredentials;
const validarCredenciales = (ICredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = ICredentialDto;
    const foundCredential = yield RCredentials_1.credentialRepository.findOneBy({ username: username });
    if (!foundCredential)
        throw new Error("Usuario no encontrado");
    if (password !== foundCredential.password)
        throw new Error("Contraseña incorrecta");
    return foundCredential;
});
exports.validarCredenciales = validarCredenciales;
