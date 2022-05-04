import { Request, Response } from "express";
import { FolhaRepository } from "../repositories/FolhaRepository";
import axios from "axios";
import { FolhaCalculadaRepository } from "../repositories/FolhaCalcRespository";

const folhaRepository = new FolhaRepository();
	const folhaCalculadaRepository = new FolhaCalculadaRepository();

	export class FolhaController{
		create(request: Request, response: Response) : void{
	        const folhas = folhaRepository.create(request.body);

	        response.status(201).json({message : "Folha Cadastrada", data: folhas})
	    }

	    calc(request: Request, response: Response) : void{
	    	let folhasNaoProcessadas = folhaRepository.list()
	    	let folhasProcessadas = folhaCalculadaRepository.calc(folhasNaoProcessadas)

	    	axios.post("http://localhost:3334/folha/receber", folhasProcessadas)
	        .then((response) => {
	            console.log(response.data)
	        }).catch((err) => {
	            console.log(err)
	        });

	        response.status(200).json({message: "Calculo da Folha", data: folhasProcessadas})
	    }
	}

    