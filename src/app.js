import express from "express";
import morgan from "morgan";

//Rutas
import products from "./routes/products";

const app = express();

//Configuracion
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Rutas
app.use("/api/products", products);

export default app;