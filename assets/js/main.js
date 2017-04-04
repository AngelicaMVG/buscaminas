var vacios = document.getElementsByClassName('vacio');


for(var i = 0; i< vacios.length; i++){
  vacios[i].addEventListener("click",espacioVacio);
}
function espacioVacio(){
  for(var i = 0; i< vacios.length; i++){
    console.log(i);
    vacios[i].style.backgroundColor="black";

  }

}

  var bomba = document.getElementsByClassName('bomba');
  for(var i = 0; i< bomba.length; i++){
    bomba[i].addEventListener("click", bombas);
  }
  function bombas(){
    for(var i = 0; i< bomba.length; i++){
      console.log(i);
      bomba[i].setAttribute("value","💣");

    }
  }
