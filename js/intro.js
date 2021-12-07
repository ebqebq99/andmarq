$(document).ready(function () {
  var tmp = document.querySelector("#logoTopBottom");
  var main = document.querySelector("#main");
  if(tmp.classList.contains("logo") === false){
    setTimeout(function () {
      tmp.classList.remove("intro");
    }, 1000);
  }
  tmp.classList.add("with-transition");
});