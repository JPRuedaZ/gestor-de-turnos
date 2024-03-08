"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST || "localhost",
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: false,
    // dropSchema: true,
    entities: [User_1.User, Appointment_1.Appointment, Credential_1.Credential],
    subscribers: [],
    migrations: [],
});
