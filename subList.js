//submenu
let allMenu = document.getElementsByClassName("allMenu");
let sub = document.getElementsByClassName("sub");
allMenu[0].addEventListener("mouseenter", function(){
  sub[0].style.display = "block";
})

sub[0].addEventListener("mouseleave", function(){
  sub[0].style.display = "none";
})
let subList = document.querySelectorAll(".sublist");
subList[0].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/category/icon/pc/2381cc02-4c0f-4d81-93f1-0f57b73f3628"
})
subList[0].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/category/icon/pc/4cac7e99-834d-4204-a1bf-40e822c32d3e"
})
subList[1].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_veggies_active_pc@2x.1586324570.png"
})
subList[1].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_veggies_inactive_pc@2x.1586324570.png"
})
subList[2].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_fruit_active_pc@2x.1568684150.png"
})
subList[2].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_fruit_inactive_pc@2x.1568684150.png"
})