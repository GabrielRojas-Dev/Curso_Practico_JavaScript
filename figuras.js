//////Codigo Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cms");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cms2");

console.groupEnd();

//////Codigo Triangulos
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo miden " + ladoTriangulo1 + "cms"
  + ladoTriangulo2 + "cms" + baseTriangulo + "cms"
);

const alturaTriangulo = 5.5;
console.log("La altura de triangulo es " + alturaTriangulo + "cms");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es " + perimetroTriangulo + "cms");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + "cms2");

console.groupEnd();


//Codigo Circulo

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cms");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + "cms");

//PI
const PI = Math.PI;
console.log("PI es " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("El perimetro del circulo es " + perimetroCirculo + "cms");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es " + areaCirculo + "cms");

console.groupEnd();