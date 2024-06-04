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
exports.findUserByCredentialId = exports.createUser = exports.searchIdUser = exports.getUsers = void 0;
const RCredentials_1 = require("../repositories/RCredentials");
const RUsers_1 = require("../repositories/RUsers");
const credentialsService_1 = require("./credentialsService");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTheUsers = yield RUsers_1.userRepository.find({
        relations: {
            appointments: true
        }
    });
    return allTheUsers;
});
exports.getUsers = getUsers;
const searchIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RUsers_1.userRepository.findOne({ where: { id }, relations: { appointments: true } });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.searchIdUser = searchIdUser;
//FUNCION DE SERVICIOS CREAR USUARIOS
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingEmail = yield RUsers_1.userRepository.findOne({ where: { email: userData.email } });
    const existingUsername = yield RCredentials_1.credentialRepository.findOne({ where: { username: userData.username } });
    if (existingUsername || existingEmail) {
        throw new Error('El usuario ya se encuentra registrado.');
    }
    const newUser = RUsers_1.userRepository.create(userData);
    const newCredential = yield (0, credentialsService_1.createCredentials)({
        username: userData.username,
        password: userData.password
    });
    yield RUsers_1.userRepository.save(newUser);
    newUser.credentials = newCredential;
    yield RUsers_1.userRepository.save(newUser);
    return newUser;
});
exports.createUser = createUser;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RUsers_1.userRepository.findOneBy({ credentials: { id: credentialId } });
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
