const ingresar = ()=> {
  let select1 = document.querySelector("#select-1").value;
  let select2 = document.querySelector("#select-2").value;
  let select3 = document.querySelector("#select-3").value;
console.log('::>', select1, select2, select3);
  if (select1 === "9" && select2 === "1" && select3 === "1") {
    resultado("el password 1 es correcto");
  } else if (select1 == "7" && select2 == "1" && select3 == "4") {
    resultado("El password 2 es correcto");
  } else {
    resultado("El password ingresado no es correcto");
  }
};
const resultado = (mensaje)=> {
  document.querySelector("#resultado").innerHTML = mensaje;
};
