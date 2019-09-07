import express, { json } from "express";

// Importing Routes
import usuariosRoutes from "./routes/user";
import phoneRoutes from "./routes/phone";
// Initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/telefones", phoneRoutes);

export default app;
