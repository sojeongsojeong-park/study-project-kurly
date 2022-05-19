const slider = document.getElementById("slideShow");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

let currentSlide = 0;
let sliding = setInterval( function() {
  let from = -(innerWidth * currentSlide);
  let to = from - innerWidth;
  slides.animate({
    marginLeft:[from + "px", to + "px"]
  },{
    duration: 1000,
    easing: "ease",
    iteration:1,
    fill:"both"
  });
  currentSlide++;
  if(currentSlide === (slide.length - 1)){
    currentSlide = 0;
  }

}, 3000)
const paging = document.getElementById("page");
// const numbering = currentSlide;
paging.innerHTML = `1 / 5`

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

slider.addEventListener("mouseenter",function(){
  prev.style.display = "block";
  next.style.display = "block";
})
slider.addEventListener("mouseleave",function(){
  prev.style.display = "none";
  next.style.display = "none";
})
