import {DataSource} from "typeorm";
import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "./envs";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    // dropSchema: true,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})