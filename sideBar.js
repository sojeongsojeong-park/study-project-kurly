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
  //let num = Number(y) + 180
  if(y > 690){
    sideBar.style.top = y + 180 + "px";
    sideBar.style.display = "block";
  }else{
    sideBar.style.top = "670px"
  }
})