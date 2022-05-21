# study-project-kurly

마켓컬리 클론코딩을 진행하며 페이지를 최대한 똑같이 만들기 위한 구조 짜는 방법을 배우고, vanilla javascript로 동적인 기능을 최대한 똑같이 구현해 보았다. 

## 클론 코딩 1주차
<img width = "300px" src = "https://user-images.githubusercontent.com/80265536/167244853-adf3715f-a32e-46fb-b7de-0ce253eb90eb.png">

- position: relative의 이해   
  + 화면 비율에 따라서 위치가 달라짐.   
  onmouseenter하면 나오는 subMenu들의 위치가 계속 바뀌어서 보니 포지션 값 때문이었음을 깨달음
- flex, flex-grow의 이해   
  + display:flex를 사용하면 자식요소에 사용할 수 있는 flex의 속성들을 사용해보며 적절한 사용법을 익힘

## 클론 코딩 2주차
<img width = "300px" src = "https://user-images.githubusercontent.com/80265536/167244891-b8b15c30-6a9b-4197-89ae-de6312e48124.png">   

- 스크롤을 따라 움직이는 Quick Bar를 구현    
  + window.pageYOffset을 scroll이벤트가 발생할 때 console에 찍어보니 숫자로 찍혀서 top의 값에 더해주며 요소를 움직이게 함
  + 마켓컬리 사이트의 Quick Bar는 어느정도 페이지가 줄어들면 사라지기 때문에 outerWidth를 이용하여 어느정도 window의 사이즈가 줄어들면 사라지게 구현
  
## 클론 코딩 3주차
<img width = "300px" src = "https://user-images.githubusercontent.com/80265536/167833524-621e2a31-fd9c-47ff-bbea-e9e59b868a7e.png">      

- 카운트 다운 구현
  + 시계는 구현해본 적이 있어 이를 특정 시간을 정해 빼면 될 것이라는 생각에서 출발
  + 오늘의 23:59:59분을 끝나는 시간으로 정해두고, 현재 시간이 끝나는 시간보다 작다면 끝나는 시간에서 현재시간을 빼는 함수를 구현해 화면에 구현
  
마지막은 슬라이더까지 완성해서 찾아오겠습니다,,
  Still Continue,,
