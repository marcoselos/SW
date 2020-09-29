function validar(form)
{
    var izquierda = form.izq;
    var derecha = form.drch;
    var operador = form.lista;
    var esperado = form.resul;
    var resultado = 0;
    izquierda = parseInt(izquierda.value);
    derecha = parseInt(derecha.value);
    esperado = parseInt(esperado.value);

    if(izquierda.value=="")
        alert("\tFalta un campo por rellenar\n");
    else if(derecha.value=="")
        alert("\tFalta un campo por rellenar\n");
    else if (esperado.value=="")
        alert("\tFalta un campo por rellenar\n");
                
    if (operador.value=="suma"){
        resultado = izquierda + derecha;
    } else if (operador.value=="resta"){
        resultado = izquierda - derecha;
    } else if (operador.value=="division"){
        resultado = izquierda / derecha;
    } else if (operador.value=="multiplicacion"){
        resultado = izquierda * derecha;
    }

    if (resultado!=esperado){
        document.getElementById("res").innerHTML="";
        document.getElementById("res").innerHTML="El resultado no es correcto";
        return false;
    }
    document.getElementById("res").innerHTML="";
    document.getElementById("res").innerHTML="El resultado es correcto";
    return true;
}