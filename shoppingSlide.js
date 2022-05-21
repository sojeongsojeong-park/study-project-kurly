let Gprev = document.querySelector(".gallery_prev");
let Gnext = document.querySelector(".gallery_next");
const galleries = document.querySelectorAll(".productGallery");
let currentGallery = document.getElementsByClassName("galleryOn")[0];

if(currentGallery === galleries[0]){
  Gprev.style.display = "none";
  Gnext.style.top = "-280px";
}

Gnext.addEventListener("click", function(event){
  Gprev.style.display = "block";
  Gnext.style.top = "-340px";

  let currentGallery = document.getElementsByClassName("galleryOn")[0];
  let nextGallery = currentGallery.nextElementSibling;

  if(nextGallery == null){
    nextGallery = currentGallery.parentElement.firstElementChild;
    Gprev.style.display = "none";
    Gnext.style.top = "-280px"
  }

  currentGallery.classList.remove("galleryOn");
  nextGallery.classList.add("galleryOn");
})

Gprev.addEventListener("click", function(event){

  let currentGallery = document.getElementsByClassName("galleryOn")[0];
  let previousGallery = currentGallery.previousElementSibling;
  if(currentGallery === galleries[0]){
    Gprev.style.display = "none";
    Gnext.style.top = "-280px";
  }
  //뒤로 갔다가 다시 첫번째 갤러리로 돌아왔을 때 왜 버튼이 안없어질까!
  currentGallery.classList.remove("galleryOn");
  previousGallery.classList.add("galleryOn");
})