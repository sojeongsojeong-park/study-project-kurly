let slider = document.getElementById("slideShow");
let slides = document.getElementsByClassName("slides")[0];
let slide = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(function autoslide(){
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
   pager();
 }, 3000);

const slidePrev = document.getElementsByClassName("prev")[0];
const slideNext = document.getElementsByClassName("next")[0];
const page = document.getElementById("page");
function pager(currentSlide){
    page.innerText = `${currentSlide} / ${slides.length}`;
}


slider.onmouseenter = function(event){
    slidePrev.style.display = "block";
    slideNext.style.display = "block";
}
slider.onmouseleave = function(event){
    slidePrev.style.display = "none";
    slideNext.style.display = "none";
}

// let prev = document.querySelector("#slideShow .prev")[0];
// let next = document.querySelector("#slideShow .next")[0];

// next.onclick = function(e){
//   e.preventDefault()

//   var nextSlide = currentSlide.nextElementSibling;
//   if(nextSlide === null){
//     nextSlide = currentSlide.parentElement.firstElementChild;
//   }
//   currentSlide.animate({
//     opacity:[1,0]
//   }, {
//     duration: 500,
//     easing: "ease",
//     iteration: 1,
//     fill:"both"
//   });
//   currentSlide.classList.remove("active");
//   nextSlide.animate({
//     opacity:[0,1]
//   }, {
//     duration: 500,
//     easing: "ease",
//     iteration: 1,
//     fill:"both"
//   });
//   nextSlide.classList.add("active");
// }
// prev.onclick = function(e){
//   e.preventDefault()

//   var previousSlide = currentSlide.previousElementSiblings;
//   if(previousSlide === null){
//     previousSlide = currentSlide.parentElement.lastElementChild;
//   }
//   currentSlide.animate({
//     opacity:[1,0]
//   }, {
//     duration: 500,
//     easing: "ease",
//     iteration: 1,
//     fill:"both"
//   });
//   currentSlide.classList.remove("active");
//   previousSlide.animate({
//     opacity:[0,1]
//   }, {
//     duration: 500,
//     easing: "ease",
//     iteration: 1,
//     fill:"both"
//   });
//   previousSlide.classList.add("active");
// }
// // console.log(slide.length);