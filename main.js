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
  window.scrollTo({left: 0, top: 0, behavior:"smooth"})
})

let cart = document.getElementById("cart");
let heartBtn = document.getElementById("heartBtn");
console.log(cart.firstElementChild.src)

cart.addEventListener("mouseenter", function(){
  cart.firstElementChild.src = "https://res.kurly.com/pc/service/common/2011/ico_cart_on.svg?v=1"
})
cart.addEventListener("mouseleave", function(){
  cart.firstElementChild.src = "./kurlyImages/ico_cart.svg"
})
heartBtn.addEventListener("mouseenter", function(){
  heartBtn.firstElementChild.src = "https://res.kurly.com/pc/service/pick/btn-heart-hover.svg"
})
heartBtn.addEventListener("mouseleave", function(){
  heartBtn.firstElementChild.src = "./kurlyImages/btn-heart-off.svg"
})



