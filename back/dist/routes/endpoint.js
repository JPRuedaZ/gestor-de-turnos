"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentRouter_1 = __importDefault(require("./Routers/appointmentRouter"));
const userRouter_1 = __importDefault(require("./Routers/userRouter"));
const router = (0, express_1.Router)();
router.use("/users", userRouter_1.default);
router.use("/appointments", appointmentRouter_1.default);
exports.default = router;
