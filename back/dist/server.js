"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoint_1 = __importDefault(require("./routes/endpoint"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(endpoint_1.default);
exports.default = server;
