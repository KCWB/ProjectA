export interface Folha{
    mes: number;
    ano: number;
    horas: number;
    valor: number;
    processado: number;
    funcionario: {
        nome: string;
        cpf: string;
    }

}

