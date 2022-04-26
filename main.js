let slider = document.getElementById("slideShow");
let slides = document.getElementsByClassName("slides")[0];
let slide = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(function (){
    let from = - (2100 * currentSlide);
    let to = from - 2100;
//   for(let i=0;i<slide.length;i++){

    slides.animate({
      marginLeft:[from + "px", to + "px"]
    }, {
     duration: 500,
     easing: "ease",
     iteration: 1,
     fill:"both"
   });
//   // let nextSlide = currentSlide++;
   currentSlide++;
   if(currentSlide === (slide.length - 1)){
     currentSlide = -1;
   }
 }, 3000);

 function stopSlide(){
   clearInterval(animate);
 }
// console.log(slide.length);

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


let subLi = document.querySelectorAll(".sublist");
subLi.addEventListener("mouseenter", function(){
  this.classList.add("sublistOn");
  this.nextElementSibling.classList.remove("sublistOff");
})
