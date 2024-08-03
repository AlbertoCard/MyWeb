var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function sumar(){
    var resultado = parseInt(num1.value) + parseInt(num2.value);
    document.getElementById("resultado").innerHTML = "total = " + resultado;
    //alert("El resultado de la suma es: " + resultado);
}


