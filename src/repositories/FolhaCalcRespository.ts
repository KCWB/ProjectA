import { FolhaCalculada } from "../model/FolhaCalculada"; 
import { Folha } from "../model/Folha";

const folhasCalculadas : FolhaCalculada[] = [];
		export class FolhaCalculadaRepository{
		    calc(folhasNaoProcessadas:Folha[]) : FolhaCalculada[]{
		    	folhasNaoProcessadas.forEach((folha) => {
		        	let folhaProcessada : FolhaCalculada = {
		        		mes: folha.mes,
		        		ano: folha.ano,
		        		horas: folha.horas,
		        		valor: folha.valor,
		        		bruto: 0.0,
		        		irrf: 0.0,
		        		inss: 0.0,
		        		fgts: 0.0,
		        		liquido: 0.0,
		        		funcionario: {
		        			nome: folha.funcionario.nome,
		        			cpf: folha.funcionario.cpf
		        		}
		        	}
		        	//Bruto
		        	folhaProcessada.bruto = folhaProcessada.horas * folhaProcessada.valor;
		        	//IRRF
		        	if (folhaProcessada.bruto <= 1903.98){
		        		folhaProcessada.irrf = folhaProcessada.bruto * 0;
		        	}
		        	else if (folhaProcessada.bruto > 1903.98 && folhaProcessada.bruto <= 2826.65){
		        		folhaProcessada.irrf = folhaProcessada.bruto * 0.075;
		        	}
		        	else if (folhaProcessada.bruto > 2826.66 && folhaProcessada.bruto <= 3751.05){
		        		folhaProcessada.irrf = folhaProcessada.bruto * 0.15;
		        	}
		        	else if (folhaProcessada.bruto > 3751.06 && folhaProcessada.bruto <= 4664.68){
		        		folhaProcessada.irrf = folhaProcessada.bruto * 0.225;
		        	}
		        	else{
		        		folhaProcessada.irrf = folhaProcessada.bruto * 0.275;
		        	}
		        	//INSS
		        	if (folhaProcessada.bruto <= 1693.72){
		        		folhaProcessada.inss = folhaProcessada.bruto * 0.08;
		        	}
		        	else if (folhaProcessada.bruto > 1693.72 && folhaProcessada.bruto <= 2822.90){
		        		folhaProcessada.inss = folhaProcessada.bruto * 0.09;
		        	}
		        	else if (folhaProcessada.bruto > 2822.90 && folhaProcessada.bruto <= 5645.80){
		        		folhaProcessada.inss = folhaProcessada.bruto * 0.11;
		        	}
		        	else{
		        		folhaProcessada.inss = 621.03;
		        	}
		        	//FGTS
		        	folhaProcessada.fgts = folhaProcessada.bruto - (folhaProcessada.inss.bruto * 0.08);
		        	//Liquido
		        	folhaProcessada.liquido = folhaProcessada.bruto - folhaProcessada.irrf - folhaProcessada.inss;
		    	});
		        return folhasCalculadas;
		    }
		}