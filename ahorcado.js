var palabraClave = prompt("Ingrese palabra a adivinar: ");
var adivinando = "";
var vidas=5;
var gano = false;

function adivinarLetra (){
  var adivino=false;
  var letraNueva = prompt("Adivine una letra: ");
  for(let j=0; j<palabraClave.length; j++){
    if (letraNueva==palabraClave[j]) {
      adivino=true;
      alert("Adivinaste la letra: ''" + letraNueva + "'' en el indice: " + j);
      return letraNueva;
      }
    }
    vidas--;
    alert("Letra equivocada. Vidas restantes: "+vidas);
  }
for (vidas;vidas>=0;vidas--){
  adivinarLetra();
  // chequearSiGano();
}
