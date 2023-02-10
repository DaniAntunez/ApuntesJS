//declaramos variables con tres palabras reservadas. VAR utiliza muchos recursos por lo que utilizaremos LET para variables cambiantes o CONST para variables fijas
var city1 = "Madrid";
let city2 = "Madrid";
const city3 = "Madrid";

//mostramos los valores declarados
console.log(city1);//muestra Madrid
console.log(city2);//muestra Madrid
console.log(city3);//Muestra Madrid

//damos nuevos valores a las variables
city1 = "Sevilla";
city2 = "Vitoria";
//city3 no podemos modificarla pues es CONST y tiene un valor fijo

//mostramos los nuevos valores
console.log(city1);//muestra Sevilla
console.log(city2);//muestra Vitoria
console.log(city3);//muestra Madrid

//mostramos parte de los valores
console.log(city1[0]);//muestra S
console.log(city2[1]);//muestra i
console.log(city3[2]);//muestra d