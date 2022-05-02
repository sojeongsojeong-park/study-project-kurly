let sideBar = document.getElementById("sideBar");
window.onresize = function(){
  let x = window.outerWidth;
  if(x < 1370){
    sideBar.style.display = "none";
  }else{
    sideBar.style.display = "block";
  }
}

window.addEventListener("scroll", function(event){
  let y = window.pageYOffset;
  let num = Number(y) + 180
  if(y > 570){
    sideBar.style.top = num + "px";
    sideBar.style.display = "block";
  }else{
    sideBar.style.top = "580px"
  }
})