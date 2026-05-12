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
  let reg = registrada.value;
let km = distancia.value;
let valor = tarifa.innerText;
let localidad = localidad;

if (reg === "si" );
if (localidad=== "caba")
if (km <= 3) {
 valor = 715.24;
}
else if (km <= 6) {
  valor = 794.74
}
else if (km <= 12){
valor = 855.97
}
else if (km <=27){
  valor= 917.24
}
if (reg === "si" );
if (localidad=== "pba")
  if (km <= 3) {
   valor = 968,57;
  }
  else if (km <= 6) {
    valor = 1.089,64
  }
  else if (km <= 12){
  valor = 1.210,71
  }
  else if (km <=27){
    valor= 1.452,85
  }
  else if (km <27){
    valor= 1.708,2
  }
  if (reg === "si" );
if (localidad ==="nacional")
  if (km <= 3) {
    valor = 700;
   }
   else if (km <= 6) {
     valor =  779,78
   }
   else if (km <= 12){
   valor = 839,86
   }
   else if (km <=27){
     valor= 899,99
   }
   else if (km <27){
     valor= 959,71
   }

if (reg === "no" )
  if (km <= 3) {
    valor = 1,137.23
   }
   else if (km <=6) {
     valor =1,263.64
   }
   else if (km <= 12){
   valor = 1,360.99
   }
   else if (km <=27){
     valor= 1,458.41
   }
  
 


if (reg=== "Tarifasocial")
  if (km <= 3) {
    valor = 339.18
   }
   else if (km <=6) {
     valor =  376.88
   }
   else if (km <= 12){
   valor = 405.91
   }
   else if (km <=27){
     valor= 434.97
   }

   
   alert(valor)

  });