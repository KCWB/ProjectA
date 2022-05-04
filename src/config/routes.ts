import {Router} from "express";
import { FolhaController } from "../controller/FolhaController";

const routes = Router();

routes.get("/", (req, res)=>{
    res.status(200).json({message : "Server Project"});
})

//Folha
routes.post("/folha/cadastrar", new FolhaController().create);
routes.get("/folha/calcular", new FolhaController().calc);

export default routes;
