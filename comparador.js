const age1 = 15;
const age2 = 15;
const age3 = "15";
const age4 = 20;

const mismaClase = age1 == age2;//== compara valores iguales
console.log(mismaClase);//muestra true pues tienen igual valor

const igualClase = age1 === age3;//=== compara valor y tipo
console.log(igualClase);//muestra false pues tienen igual valor pero distinto tipo

const claseContraria = !mismaClase;//! es un negador
console.log(claseContraria);//muestra false pues está negando el true

const claseDiferente = age1 != age2;//!= compara valores diferentes
console.log(claseDiferente);//muestra false pues los valores no son diferentes

const puedeConducir = age1 >= 18;//compara valores mayor
console.log(puedeConducir);//muestra false pues 15 no es mayor que 17