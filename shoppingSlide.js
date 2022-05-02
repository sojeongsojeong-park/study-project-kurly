let prev = document.getElementsByClassName("gallery_prev")[0];
let next = document.getElementsByClassName("gallery_next")[0];
const galleries = document.querySelectorAll(".gallery");
let currentGallery = document.getElementsByClassName("galleryOn")[0];

if(currentGallery === galleries[0]){
  prev.style.display = "none";
  next.style.top = "-280px";
}

next.addEventListener("click", function(event){
  prev.style.display = "block";
  next.style.top = "-340px";

  let currentGallery = document.getElementsByClassName("galleryOn")[0];
  let nextGallery = currentGallery.nextElementSibling;

  if(nextGallery == null){
    nextGallery = currentGallery.parentElement.firstElementChild;
    prev.style.display = "none";
    next.style.top = "-280px"
  }

  currentGallery.classList.remove("galleryOn");
  nextGallery.classList.add("galleryOn");
})

prev.addEventListener("click", function(event){

  let currentGallery = document.getElementsByClassName("galleryOn")[0];
  let previousGallery = currentGallery.previousElementSibling;
  if(currentGallery === galleries[0]){
    prev.style.display = "none";
    next.style.top = "-280px";
  }
  //뒤로 갔다가 다시 첫번째 갤러리로 돌아왔을 때 왜 버튼이 안없어질까!
  currentGallery.classList.remove("galleryOn");
  previousGallery.classList.add("galleryOn");
})