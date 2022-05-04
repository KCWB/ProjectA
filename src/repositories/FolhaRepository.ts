import { Folha } from "../model/Folha";

const folhas : Folha[] = [];
	export class FolhaRepository{
	    create(folha:Folha) : Folha[]{
            folha['processado'] = 0;
	        folhas.push(folha);
	        return folhas;
	    }
	    list() : Folha[]{
        let folhasNaoProcessadas = folhas.filter((value) => value.processado === 0);
         folhasNaoProcessadas.forEach((folha) => {
        folha.processado = 1;
        });
        return folhasNaoProcessadas;
    }
}