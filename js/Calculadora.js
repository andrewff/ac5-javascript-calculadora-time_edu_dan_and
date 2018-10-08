function digitar(valor){
  
        document.getElementById("resultado").value += valor;
        
}

function digitar_opr(valor){
    resultado = document.getElementById("resultado").value;
    if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
    && resultado.indexOf("/")<=0){
    document.getElementById("resultado").value += valor;
    }
}


function calcular(){
    var resultado = 0;
    resultado = document.getElementById("resultado").value;
    
    if (resultado.indexOf("/") >=0 ){
        array = resultado.split("/"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x / y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;

        }
    }

    else if(resultado.indexOf("*")>=0){
        array = resultado.split("*"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x * y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }

    else if(resultado.indexOf("+")>=0){
        array = resultado.split("+"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x + y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }

    else if(resultado.indexOf("-")>=0){
        array = resultado.split("-"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x - y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }



    
}


        
