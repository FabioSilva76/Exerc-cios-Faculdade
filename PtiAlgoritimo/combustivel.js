
do{ 
    var alc = parseFloat(prompt('Digite o valor do Alcool'));
    var gas = parseFloat(prompt('Digite o valor da gasolina'));
    var calc = alc / gas;
    var res = calc;
            
    alert('A média é = ' + res +  ' , Então!');
    
    
    if(res > 0.7){
    
    alert('A melhor opção é colocar Gasolina ');
    } else if(res < 0.7){

    alert('A melhor opção é colocar Alcool ');
    } else if(res == 0.7){

    alert('Tanto faz colocar Alcool ou Gasolina');

    }
    
    var opc = prompt('Deseja efetuar uma nova consulta? \n Digite 1 para SIM \n ou  2  para Não!');
    
 } while( opc==1);{

    alert('Obrigado!');
 }

   
 
 // codigo Bruna
 /*
 do {
    
   var gas, alc, res, inicio
   
   gas = parseFloat(prompt("Digite o valor da gas"));
 
   alc = parseFloat(prompt("Digite o valor do alc"));

   res = alc / gas;
   
     
   
     if (res > 0.7) {
 
       alert('Compre gasolina');
 
     } else if (res < 0.7) {
 
      alert('compre álcool');
 
   }else{

       alert("Você pode escolher alcool ou gasolina");
     }
 
    inicio = prompt("Deseja novo calculo? \n Digite n para finalizar. Digite s para continuar");
 
 }  while (inicio == 's'){

   alert("Obrigado volte sempre!");
 }

        */

  
    

