//ABECEDARIO
var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXY";
//LETRA A DESCIFRAR
var letraADescifrar = "B";
//CONVIRTIRNDO CADENA A ARRAY
var converArrayAbecedario = Array.from(abecedario);
//FOR PARA QUE CORRA 
for(var i=0; i<=converArrayAbecedario.length; i++) {
    //var caracter = abecedario.charAt(i); 
 descifrado = ((converArrayAbecedario.indexOf(letraADescifrar) + 33) % 26);
 
 deAscciAletra = String.fromCharCode(descifrado + abecedario.charCodeAt(i));
}





