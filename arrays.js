//los array son cajas que almacenan elementos
var avengers = ["Hulk", "SpiderMan", "AntMan"];
var justiceLeague = ["SuperMan", "Wonder Woman", "BatMan"];

var avenger = avengers[0];
console.log(avenger);//devuelve "Hulk" pues está ne la posición inicial 0
console.log(avengers.length);//devuelve 3, los elementos en la variable

//funciones que modifican el array
avengers.push("IronMan");//inserta un elemento al final de la lista
avengers.shift();//elimina el primer elemento de la lista (no admite parámetros)
avengers.unshift("Thor","Black Widow");//añade elementos al principio de la lista
avengers.pop();//elimina el último elemento de la lista (no admite parámetros)
avengers.reverse();//invierte el orden de los elementos en el array
avengers.sort();//ordena los elementos en el array en orden alfabético
avengers.splice(0,1,"Capitán América");//elimina elementos desde el primer parámetro tantos como el segundo parámetro, se puede incluir nuevos elementos que sustituiran a los eliminados, si estos son más qu elos eliminados entonces se añadiran
console.log(avengers);

//funciones que no modifican el array
avengers.concat(justiceLeague);//se ha concatenado la segunda matriz a la primera para trabajar como si estuvieran unidas
avengers.join("-");//separador de los elementos de array, por defecto por comas pero se puede incluir un parámetro como separador por ello el array pasa a ser de tipo string
avengers.toString();//similar a join pero no admite parámetros
avengers.slice(2,1);//extrae una copia de la sección indicada desde el primer parámetro y tantos elementos como el segundo parámetro, sino se incluye el segundo la función continuará hasta el final

//localizar un valor en un array
avengers.indexOf("SpiderMan");//devuelve el índice del primer elemento que coincide con el parámetro, sino hubiera devuelve -1
avengers.lastIndexOf("SpiderMan");//similar a indexof pero sobre la última coincidencia
avengers.includes("SpiderMan");//determina si una matriz incluye un determinado elemento devolviendo true o false
