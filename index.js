function fatorial(numero) {

    // Verifica se é inteiro e positivo
    if (!Number.isInteger(numero) || numero < 0) {
        return "Digite um número inteiro positivo.";
    }

    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(5));   
console.log(fatorial(-2));  
console.log(fatorial(3.5)); 
