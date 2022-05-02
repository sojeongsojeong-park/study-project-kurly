let CS = document.getElementById("CS");
let csCenter = document.getElementsByClassName("csCenter")[0];
CS.addEventListener("mouseenter", function(){
  csCenter.style.display = "block";
})
csCenter.addEventListener("mouseenter", function(){
  csCenter.style.display = "block";
})
csCenter.addEventListener("mouseleave", function(){
  csCenter.style.display = "none";
})

let nav = document.getElementById("nav");
let gotoTop = document.getElementsByClassName("goToTop");
window.addEventListener("scroll", function(){
  let y = window.pageYOffset;
  if(y > 150){
    nav.classList.add("stickyOn");
    gotoTop[0].style.display = "block";
  }else{
    nav.classList.remove("stickyOn");
    gotoTop[0].style.display = "none";
  }
})

let allMenu = document.getElementsByClassName("allMenu");
let sub = document.getElementsByClassName("sub");
allMenu[0].addEventListener("mouseenter", function(){
  sub[0].style.display = "block";
})

sub[0].addEventListener("mouseleave", function(){
  sub[0].style.display = "none";
})


// let subLi = document.querySelectorAll(".sublist");
// subLi.addEventListener("mouseenter", function(){
//   this.classList.add("sublistOn");
//   this.nextElementSibling.classList.remove("sublistOff");
// })


