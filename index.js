function fatorial(numero) {

    
    if (!Number.isInteger(numero)) {
        return "O número precisa ser inteiro.";
    }

    
    if (numero < 0) {
        return "Não existe fatorial de número negativo.";
    }

   
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(5));     
console.log(fatorial(-3));   
console.log(fatorial(4.5));   
