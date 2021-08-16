///

function CalcularDescuento(precio, descuento, valueCuponDescuento) {
  if (!valueCuponDescuento) {
    return (precio * (100 - descuento)) / 100;
  } else {
    return ((precio * (100 - descuento) / 100) - valueCuponDescuento);
  }
}

let cupones = [
  {
    name: "gfrs",
    monto: 200
  },
  {
    name: "gabriel",
    monto: 500
  },
  {
    name: "francisco",
    monto: 800
  },
  {
    name: "rojas",
    monto: 900
  },
  {
    name: "suarez",
    monto: 100
  }
];

function calcularPrecioConDescuento() {
  //Entrada de datos por inputs
  const inputPrecio = document.getElementById("inputPrecio");
  const valuePrecio = parseInt(inputPrecio.value);

  const inputDescuento = document.getElementById("inputDescuento");
  const valueDescuento = parseInt(inputDescuento.value);

  const inputCupon = document.getElementById("inputCupon");
  const valueCupon = inputCupon.value;


  const EsValido = function (cupon) {
    return cupon.name === valueCupon;
  };

  const usuarioCupon = cupones.find(EsValido);

  if (!usuarioCupon) {
    alert(`Este cupon ${usuarioCupon} no es valido`);
  }

  const valueCuponDescuento = usuarioCupon.monto;
    const precioConDescuento = CalcularDescuento(
      valuePrecio,
      valueDescuento,
      valueCuponDescuento
    );

    const outDescuento = document.getElementById("resultadoDescuento");
    outDescuento.innerText = `Tienes un descueto del ${valueDescuento}%`;

    const outDescuentoCupon = document.getElementById("resultadoCupon");
    outDescuentoCupon.innerText = `Tu cupon descontara $${usuarioCupon.monto}`;

    const outMontoConDescuento = document.getElementById("resultadoMontoConDescuento");
    outMontoConDescuento.innerText = `El precio a pagar es $${precioConDescuento}`;

}
