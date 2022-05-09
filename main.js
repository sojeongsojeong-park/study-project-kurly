//고객센터
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

//sticky nav, goToTop
let nav = document.getElementById("nav");
let gotoTop = document.querySelector(".goToTop");
window.addEventListener("scroll", function(){
  let y = window.pageYOffset;
  if(y > 150){
    nav.classList.add("stickyOn");
    gotoTop.style.display = "block";
  }else{
    nav.classList.remove("stickyOn");
    gotoTop.style.display = "none";
  }
})

gotoTop.addEventListener("click", function(){
  document.documentElement.scrollTop = 0;
})


// let subLi = document.querySelectorAll(".sublist");
// subLi.addEventListener("mouseenter", function(){
//   this.classList.add("sublistOn");
//   this.nextElementSibling.classList.remove("sublistOff");
// })




