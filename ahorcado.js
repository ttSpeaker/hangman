var palabraClave = "";
var letrasAdivinadas = "";
var vidas= 0;
function adivinarLetra (){
  var adivino=false;
  var letraNueva = prompt("La palabra clave contiene: "+palabraClave.length+" caracteres.\n Letras adivinadas: "+letrasAdivinadas+"\nAdivine una letra: ");
  for(let j=0; j<palabraClave.length; j++){
    if (letraNueva==palabraClave[j]) {
      adivino=true;
      letrasAdivinadas=letrasAdivinadas.concat(letraNueva+", ");
      alert("Adivinaste la letra: "+letraNueva+" en la: "+j+" posición");
      return;
      }
    }
    vidas--;
    alert("Letra equivocada. Vidas restantes: "+vidas);
}
function mostrarCartel(status){
  alert(status);
}

function adivinarPalabra() {
  palabraNueva = prompt("Se le acabaron las vidas. La palabra clave contiene: "+palabraClave.length+" caracteres.\n Letras adivinadas: "+letrasAdivinadas+"\nAdivine la palabra clave: ");
  if(palabraNueva==palabraClave){
    mostrarCartel("Ganador!!");
  } else {mostrarCartel("Perdiste!!");}
}
function jugar(){
  palabraClave = prompt("Ingrese palabra a adivinar: ");
  console.log("empieza juego");
  console.log(vidas);
  for (vidas=5; vidas>0;){
    adivinarLetra();
  }
  adivinarPalabra();
}
