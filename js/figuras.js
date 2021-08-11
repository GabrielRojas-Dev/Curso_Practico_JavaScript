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

