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
  let km = parseFloat(distancia.value);
let valor;
let localidad = jurisdiccion.value;

if (reg === "si" ){
if (localidad === "caba"){
if (km <= 3) {
 valor = 715.24
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
}
else if (localidad=== "pba") {
  if (km <= 3) {
   valor = 968,57
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
}
if (localidad ==="nacional"){
  if (km <= 3) {
    valor = 700
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
  }
}
   
   if (reg === "no" ){
   if (localidad=== "caba"){
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
    }
   
   if (localidad=== "pba"){
     if (km <= 3) {
      valor =  1.937,14
     }
     else if (km <= 6) {
       valor = 2.179,28
     }
     else if (km <= 12){
     valor = 2.421,42
     }
     else if (km <=27){
       valor=  2.905,70
     }
     else if (km <27){
       valor= 3.416,14
     }
    }
     
   if (localidad ==="nacional"){
     if (km <= 3) {
       valor = 1.113
      }
      else if (km <= 6) {
        valor =   1.239,85
      }
      else if (km <= 12){
      valor = 1.335,38
      }
      else if (km <=27){
        valor= 1.430,98
      }
      else if (km <27){
        valor= 1.525,94
      }
   }
  }
  
 
 
      if (reg === "Tarifasocial" ){
      if (localidad=== "caba"){
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
        }
      
      if (localidad=== "pba"){
        if (km <= 3) {
         valor = 435,85
        }
        else if (km <= 6) {
          valor = 490,33
        }
        else if (km <= 12){
        valor =  544,81
        }
        else if (km <=27){
          valor=  653,78
        }
        else if (km <27){
          valor= 768,63
        }
      }
        
      if (localidad ==="nacional"){
        if (km <= 3) {
          valor = 315
         }
         else if (km <= 6) {
           valor =   350,90
         }
         else if (km <= 12){
         valor = 377,93
         }
         else if (km <=27){
           valor= 404,99
         }
         else if (km <27){
           valor= 431,86
         }

        }
      }
         tarifa.innerText = ("El valor de tu boleto es " + valor)
   
  
  });