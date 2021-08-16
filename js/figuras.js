//////Codigo Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
} 

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//////Codigo Triangulos
console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function alturaTriangulo (ladoA, ladoB, base) {
  if (ladoA != ladoB) {
    alert("No es un triangolo Isosceles");
  } else {

    //Declaramos las variables del triangulo hijo
    const trianguloChildLadoB = base / 2;
    const trianguloChildbase = ladoA;

    //Elevamos al cuadrado
    const trianguloChildLadoBCuadrado = trianguloChildLadoB * trianguloChildLadoB;
    const trianguloChildbaseCuadrado = trianguloChildbase * trianguloChildbase;

    //Obtenemos la medida del lado A de Triangulo hijo
    const trianguloChildLadoA = Math.sqrt (trianguloChildbaseCuadrado - trianguloChildLadoBCuadrado);
    const altura = trianguloChildLadoA;

    return altura;

  }
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

console.groupEnd();


//Codigo Circulo
console.group("Circulos");

//Diametro

function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//Integración al html

/////cuadrado

function calcularPerimetroCuadrado () {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(`El perímetro es: ${perimetro}`);
}

function calcularAreaCuadrado () {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(`El área es: ${area}`);
}

///triangulo

function calcularPerimetroTriangulo () {
  const inputLadoA = document.getElementById("inputTrianguloLadoA");
  const inputLadoB = document.getElementById("inputTrianguloLadoB");
  const inputBase = document.getElementById("inputTrianguloBase");

  const valueLadoA = parseInt(inputLadoA.value);
  const valueLadoB = parseInt(inputLadoB.value);
  const valueBase = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
  alert (`El perimetro del triangulo es ${perimetro}`);

}

function calcularAreaTriangulo () {
  const inputLadoA = document.getElementById("inputTrianguloLadoA");
  const valueLadoA = parseInt(inputLadoA.value);

  const inputLadoB = document.getElementById("inputTrianguloLadoB");
  const valueLadoB = parseInt(inputLadoB.value);

  const inputBase = document.getElementById("inputTrianguloBase");
  const valueBase = parseInt(inputBase.value);

  const altura = alturaTriangulo(valueLadoA, valueLadoB, valueBase);
  const area = areaTriangulo(valueBase, altura);

  alert (`El área del triangulo es ${area}`);
}
