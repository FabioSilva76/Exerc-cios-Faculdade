
function soma(N1,N2){
var res = N1 + N2;
return res;
}
function num(){
    var N = parseInt(prompt("Digite um número" ));
    return N;
}
function sub(N1, N2){
    var s = N1 - N2;
    return s;
}
function multi(N1,N2){
    var M = N1 * N2;
    return M;
}
function DIV (N1,N2){
    var d = N1 / N2;
    return d;
}
function imprimir (total){
   alert(total);
}
var opc;

opc = prompt ("Escolha uma opção: \n 1.Soma \n 2.Subtração \n 3.Multiplicação \n 4.Divisão \n ");

if(opc == 1){
    var SOMA = "A soma é "+  soma(num(),num());
    imprimir (SOMA);

}
if(opc == 2){
    var SUB = "A subtração é " + sub(num(),num());2
    imprimir (SUB);
}
if(opc == 3){
    var m = "A multiplicação é " + multi(num(),num());
    imprimir(m);
}
if(opc == 4){
    var div, numerador, denominador;
    numerador = num();

    do{
        denominador = num();

    } while ( denominador == 0);
    div =  "A divisão é " + DIV (numerador,denominador);
    imprimir(div);

    
}