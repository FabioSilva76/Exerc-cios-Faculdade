
do{ 
    var alc = parseInt(prompt('Digite o valor do Alcool'));
    var gas = parseInt(prompt('Digite o valor da gasolina'));
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

   

        

  
    

