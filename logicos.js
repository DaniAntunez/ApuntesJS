//"||"OR devuelve verdadero si uno de los valores lo es
var tengoEfectivo = true;
var tengoTarjeta = false;
var puedoPagar =  tengoEfectivo || tengoTarjeta;
console.log(puedoPagar);//devuelve true pues tengo efectivo

//"&&"AND devuelve verdadero si todos los valores lo son
var tengoCoche = false;
var tengoCarnet = true;
var puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);//devuelve false pues no tengo coche

//concatenamos
const tengoMoto = true;
puedoConducir = (tengoCoche || tengoMoto) && tengoCarnet;
console.log(puedoConducir);//devuelve true pues no tengo coche pero tengo moto y tengo carnet

//"!"NOT niega una expresión, le da el valor opuesto
//"!=" resulta diferente
//"!true" resulta false, lo contrario
//"!variable" resulta el valor opuesto de la variable