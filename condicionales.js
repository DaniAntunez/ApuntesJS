//"IF - IF...ELSE - ELSE IF" Comprueba si se cumplen condiciones
var age = 20;

if (age < 18) {
 console.log("Tienes que esperar"); //este mensaje no se imprime pues no tenemos menos de 18
  } else if (age == 18) {
 console.log("Felicidades por tener 18!!"); //este mensaje no se imprime pues no tenemos 18
  } else if (age == 19 || age == 20 || age == 21) {
 console.log("Tienes una ayuda"); //este mensaje se imprime pues se cumple que tenemos 20  
  } else if (age > 21 && age <= 80) {
 console.log("Estás solo"); //este mensaje no se imprime pues no se cumple que nuestra edad está en el intervalo  
  } else if (age > 80) {
 console.log("Te has pasado el juego"); //este mensaje no se imprime pues no tenemos mas de 80  
  }
  