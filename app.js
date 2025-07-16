import express from "express";
import routes from "./routes.js";


const server = express();

server.use(express.json());

server.use("/api", routes);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});