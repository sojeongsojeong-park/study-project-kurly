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

subList[3].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_seafood_active_pc@2x.1568684353.png"
})
subList[3].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_seafood_inactive_pc@2x.1568684352.png"
})

subList[4].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_meat_active_pc@2x.1568684452.png"
})
subList[4].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_meat_inactive_pc@2x.1568684452.png"
})

subList[5].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_side_active_pc@2x.1572243579.png"
})
subList[5].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_side_inactive_pc@2x.1572243579.png"
})

subList[6].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_convenient_active_pc@2x.1572243543.png"
})
subList[6].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_convenient_inactive_pc@2x.1572243542.png"
})
subList[7].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_sauce_active_pc@2x.1572243594.png"
})
subList[7].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_sauce_inactive_pc@2x.1572243594.png"
})
subList[8].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_snacks_active_pc@2x.1572243616.png"
})
subList[8].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_snacks_inactive_pc@2x.1572243615.png"
})
subList[9].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_cookie_active_pc.1610074008.png"
})
subList[9].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_cookie_inactive_pc.1610074008.png"
})
subList[10].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_deli_active_pc@2x.1568687352.png"
})
subList[10].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_deli_inactive_pc@2x.1568687352.png"
})
subList[11].addEventListener("mouseenter", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_health_active_pc@2x.1574645923.png"
})
subList[11].addEventListener("mouseleave", function(){
  this.firstElementChild.firstElementChild.src = "https://img-cf.kurly.com/shop/data/category/icon_health_inactive_pc@2x.1574645922.png"
})