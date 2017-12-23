
let backgroundPos = 10;
 const moveBackground = function() {
   backgroundPos -= 1;
   document.getElementById('background').style['background-position-x'] = backgroundPos + "px";
   setStonesPos();
};
/* -------------------------------------------------------------
--------------------------------------------------------------- */

let stones = ['stone.png','stone1.png'];
const setStonePos = function(stone, incr) {
  let currentPos = +stone.style.right.slice(0, -2);
  stone.style.right = (currentPos + incr) + "px";
};

const setStonesPos = function(incr = 1) {
  let stones = document.getElementsByClassName('stone');
  [...stones].forEach(function(stone){
    setStonePos(stone,incr)
  });
};

const deleteInvisibleStones = function(stone) {
  if (stone.offsetLeft < 0) {
    setStonesPos(stone.offsetWidth);
    stone.parentNode.remove();
  }
};

const deleteExtraStones = function() {
  let stones = document.getElementsByClassName('stone');
  [...stones].forEach(deleteInvisibleStones);
};

const createStone = function() {
  deleteExtraStones();
  if (Math.random() * 10 < 3) {
    return;
  }
  let div = document.createElement('div');
  let image = document.createElement('img');
  image.className = "stone";
  image.src = stones[Math.floor(Math.random()*2)];
  image.style.right = "0px"
  div.appendChild(image);
  document.getElementById('main').appendChild(div);
};

/*------------------------------------------------
--------------------------------------------------*/

let rabbitPos = 0;
const moveRabbitUpward = function(event){
  let rabbit = document.getElementById('rabbit');
  if(event.keyCode == 38){
    rabbitPos = 320;
    rabbit.style.top= rabbitPos +'px';
  }
  setTimeout(setRabbitAtInitilPos,1000);
};

const setRabbitAtInitilPos = function(){
  rabbitPos = 410;
  rabbit.style.top= rabbitPos +'px';
};
/*---------------------------------------------------
-----------------------------------------------------*/
const startGame = function(){
  setInterval(createStone, 2000);
  setInterval(moveBackground, 5);
};

document.onkeydown = moveRabbitUpward;
window.onload = startGame;
