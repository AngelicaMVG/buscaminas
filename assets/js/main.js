var vacios= [];
var vaciosLength = document.getElementsByClassName('vacio').length;

for(var i = 0; i< vaciosLength; i++){
  vacios[i]= document.getElementsByClassName('vacio')[i];
}
for(var i = 0; i< vaciosLength; i++){
  vacios[i].addEventListener("click",espacioVacio);
}
function espacioVacio(){

    this.style.backgroundColor="white";

}

  var bomba = document.getElementsByClassName('bomba');
  for(var i = 0; i< bomba.length; i++){
    bomba[i].addEventListener("click", bombas);
  }
  function bombas(){
    for(var i = 0; i< bomba.length; i++){
      console.log(i);
      bomba[i].setAttribute("value","💣");
      bomba[i].style.backgroundColor="red";
      bomba[i].disabled = true
    }
    alert("Fin del juego");
  }

  var botonReinicio = document.getElementById('reiniciar');
  botonReinicio.addEventListener("click", reiniciar);
  function reiniciar(){
    location.reload();
  }
