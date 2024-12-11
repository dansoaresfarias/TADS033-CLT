import { Application } from "express";
import generoRoutes from "./genero.router";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/mobraLocadora", generoRoutes);
  }
}