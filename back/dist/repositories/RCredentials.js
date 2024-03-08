"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialRepository = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
exports.credentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
