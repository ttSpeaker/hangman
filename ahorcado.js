var palabraClave = prompt("Ingrese palabra a adivinar: ");
var arrayClave= palabraClave.split("");
var adivinando = [];
var vidas=5;
var gano = false;
for (var i = 0; i<arrayClave.length; i++) {
  adivinando[i]=("_ ");
}
console.log(palabraClave[2])
function adivinarLetra (){
  var adivino=false;
  var letraNueva = prompt("Adivine una letra: ");
  for(let j=0; j<palabraClave.length; j++){
    if (letraNueva==palabraClave[j]) {
      adivino=true;
      adivinando[j]=letraNueva;
      alert(adivinando);
      console.log("adivino");
      }
    }
    if (!adivino) {
      vidas--;
      alert("Letra equivocada. Vidas restantes: "+vidas);
    }
  }

function chequearSiGano (){
  console.log(arrayClave);
  console.log(adivinando);
  if (arrayClave == adivinando){
    alert("Ganaste!! La palabra clave era: "+ palabraClave);
    return true;
  } else {
    return false;
  }
}
for (vidas;vidas>=0;vidas--){
  adivinarLetra();
  chequearSiGano();
}
