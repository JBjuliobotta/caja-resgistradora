let num1;
let num2;
let operacion;



function presionarNumero(valor) {
    let result = obtenerResultado();
    mostrarResultado(result + valor);
}

function mostrarResultado(valor) {
    document.getElementById('display').innerHTML = valor;
} 

function obtenerResultado() {
    return(document.getElementById('display').innerHTML);
}

function limpiar(){
    mostrarResultado("");
}

function sumar(){
    num1 = obtenerResultado();
    operacion = '+';
    limpiar();
}

function restar(){
    num1 = obtenerResultado();
    operacion = '-';
    limpiar();
}

function multiplicar(){
    num1 = obtenerResultado();
    operacion = '*';
    limpiar();
}

function dividir(){
    num1 = obtenerResultado();
    operacion = '/';
    limpiar();
}

function calcular(){
    num2 = obtenerResultado();
    resolver();
}

function resolver(){
    let calculo;
    let op1 = parseFloat(num1);
    let op2 = parseFloat(num2);
    if (operacion === '+') {
        calculo = op1 + op2 ;
    } else if (operacion === '-') {
        calculo = op1 - op2;
    } else if (operacion === '*') {
        calculo = op1 * op2;
    } else if (operacion === '/') {
        calculo = op1 / op2;
        if (op2 === 0) {
            calculo = "Error"
        }
    }
    mostrarResultado(calculo);
    operacion = "";
    num1=0;
    num2=0;
}

function ac(){
    mostrarResultado("");
    num1=0;
    num2=0;
}