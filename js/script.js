window.onscroll = function () {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento1 = document.getElementById("icon_hearth");
  var elemento2 = document.getElementById("icon_fire");
  elemento1.style.bottom = posicion * 0.1 + "px";
  elemento2.style.bottom = posicion * 0.1 + "px";
};
