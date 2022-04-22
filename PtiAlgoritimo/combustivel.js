
var alc = parseInt(prompt('Digite o valor do Alcool'));
var gas = parseInt(prompt('Digite o valor da gasolina'));
var calc = alc / gas
var res = calc


    alert(res)
if(res > 0.7){
    
    alert('A melhor opção é colocar Gasolina ');
} else if(res < 0.7){

    alert('A melhor opção é colocar Alcool ');
} else if(res == 0.7){

    alert('Tanto faz colocar Alcool ou Gasolina');
}
 var sim = prompt('Deseja efetuar uma nova consulta? \n Responda S para SIM \n ou \nN para Não!');
 var resp = sim
