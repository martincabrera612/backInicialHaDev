function removerVocales(str) {
    const vocales = ["a", "e", "i", "o", "u"];
    let resultado = str.slice();
    for (let i = 0; i < vocales.length; i++) {
        resultado = resultado.replaceAll(vocales[i], "").replaceAll(vocales[i].toUpperCase(), "");
    }
    return resultado;
}

let str = "Hola como estas, soy de URUGUAY";
console.log(removerVocales(str));

let arr = [2, 2, 2, 8, 2, ];

function encontrarImpar(arr) {
    let cont = 0;

}