const timer = document.getElementById("timer");

function countDown() {
  let now = new Date();
  let end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  let open = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 00, 00, 01);

  let nt = now.getTime();
  let ot = open.getTime();
  let et = end.getTime();

  if(nt>ot){
    let sec = parseInt(et - nt) / 1000;
    let day = parseInt(sec/60/60/24);
    let secToHour = (sec - (day*60*60*24));
    let hour = parseInt(secToHour/60/60);
    let secTomin = (sec - (hour * 60 * 60));
    let min = parseInt(secTomin/60);
    let second = parseInt(sec - ((min * 60) + (hour * 60 * 60)));
    if(hour<10){hour = "0"+hour}
    if(min<10){min = "0"+min}
    if(second<10){second = "0"+second}
    timer.innerHTML = `${hour} : ${min} : ${second}`;
  }else{
    timer.innerHTML = " Wait A second";
  }
}
countDown();
setInterval(countDown, 1000);