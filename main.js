/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR
});

let registrada = registrada.value;
let km = distancia.value;
let tarifa = tarifa.innerText;
if (registrada === "Sí" );
if (km <= 3) {
 tarifa = 715.24;
}
else if (km <= 6) {
  tarifa = 794.74
}
else if (km <= 12){
tarifa = 855.97
}
else if (km <=27){
  tarifa= 917.24
}


if (registrada === "No" )
  if (km <= 3) {
    tarifa = 1,137.23
   }
   else if (km <=6) {
     tarifa =1,263.64
   }
   else if (km <= 12){
   tarifa = 1,360.99
   }
   else if (km <=27){
     tarifa= 1,458.41
   }
  