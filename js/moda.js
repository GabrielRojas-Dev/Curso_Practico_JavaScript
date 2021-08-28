//

//funcion que divide un String en numeros
function deStringANumber(valueValores) {
    let valoresString = valueValores.split(",");
    let valoresNumericos = valoresString.map(
        function (element) {
            return parseInt(element);
        }
    )
    return valoresNumericos;
}

//funcion para saber si un numero es par
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// let sumaValores = 0;

//Entrada de datos y convercion

function leerDatosInputs(nombreId) {
    const inputValores = document.getElementById(`"${nombreId}"`);
    const valueValores = String(nombreId.value);
    const desValores = deStringANumber(valueValores);
    const valores = desValores.sort(function (a,b){
        return a - b;
    });

    return valores;
}



//funcion para calcular la media
function calcularMedia() {

    const valores = leerDatosInputs(inputValores);
    // const inputValores = document.getElementById("inputValores");
    // const valueValores = String(inputValores.value);
    // const valores = deStringANumber(valueValores);

    const sumaValores = valores.reduce(
        function (suma = 0, unidad) {
            return suma + unidad;
        }
    );

    const media = sumaValores / valores.length;

    const outMedia = document.getElementById("resultadoMedia");
    outMedia.innerText = media.toFixed(2);

}

//funcion para calcular la mediana
function calcularMediana() {

    const valores = leerDatosInputs(inputValores);
    // const inputValores = document.getElementById("inputValores");
    // const valueValores = String(inputValores.value);
    // const valores = deStringANumber(valueValores);

    const mitadValores = parseInt(valores.length / 2);

    if (esPar(valores.length)) {
        const elemento1 = valores[mitadValores -1];
        const elemento2 = valores[mitadValores];

        const sumaValores = (elemento1 + elemento2) / 2;
        // const sumaValores = [elemento1,elemento2].reduce(
        //     function (suma = 0, unidad) {
        //         return suma + unidad;
        //     }
        // );

        const mediana = sumaValores;
        const outMediana = document.getElementById("resultadoMediana");
        outMediana.innerText = mediana;

    } else {
        const mediana = valores[mitadValores];
        const outMediana = document.getElementById("resultadoMediana");
        outMediana.innerText = mediana;
    }

    // const outMediana = document.getElementById("resultadoMediana");
    // outMediana.innerText = mediana;

}


//prueba

var a = 1;
let b = 2;
const c = 3;

const suma = () => {
    console.log(a);
    console.log(b);
    console.log(c);
}