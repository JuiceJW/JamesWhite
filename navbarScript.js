function openNav() {
  if($(window).width() < 768){
    document.getElementById("navbar").style.width = "100vw";
  }else {
    document.getElementById("navbar").style.width = "250px";
  }

}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}
