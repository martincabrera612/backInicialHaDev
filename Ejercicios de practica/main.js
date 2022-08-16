console.log ("-------------------------------------------");
console.log ("EJERCICIOS HACK ACADEMY");


//EJERCICIO 1 
function mostrarArray (array) {
	for (elem of array) {
		console.log(elem);
	}

}


let arr = [1,3,4,5,5,"2"];
//mostrarArray(arr);



//EJERCICIO 2
function estaElemento (array, elem) {
	let esta = false;
	for (let i = 0; i <=array.length - 1;i++) {
		if (elem === array[i]) { 
			esta = true;
		}
	}
	return esta;	
}


// console.log (estaElemento(arr, 2));

//EJERCICIO 3 

function eliminarElemento (array, elem) {
	let nuevoArray = [];
	let posElem = 0;

	for (let i = 0 ; i <= array.length - 1; i++) {
			nuevoArray[i] = array[i];
			if (array[i] === elem) {
				posElem = i;
			}
	}

	if (estaElemento(array,elem)) {
		nuevoArray.splice(posElem,1);
	}
	
	return nuevoArray;
	
}

	eliminarElemento(arr,5);

// console.log(mostrarArray(eliminarElemento(arr,9)));

//	EJERCICIO 4 

function removerVocales (cadena) {
	let vocales = ["a","e","i","o","u"];
	let nuevaCadena = cadena.slice();

	for (let vocal of vocales) {
		nuevaCadena = nuevaCadena.replaceAll(vocal,'')
			.replaceAll(vocal.toUpperCase(),'');
	}
	console.log (nuevaCadena);	
	return nuevaCadena;
	
}

let cadena = "Hola URUGUAY";
removerVocales(cadena);



