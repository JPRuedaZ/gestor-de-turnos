//Importamos Express para levantar el servidor con node y typescript.
import express from "express";
//Importamos el enrutador que envia la peticion que llega al servidor a las rutas.
import router from "./routes/endpoint";
//
import morgan from "morgan";
import cors from "cors";



const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(router);

export default server;