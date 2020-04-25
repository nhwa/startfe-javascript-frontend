//랜덤으로 좌표생성
var generateRandom = function (min, max) {
    ranNumX = Math.floor(Math.random()*(max-min+1)) + min;
    ranNumY = Math.floor(Math.random()*(max-min+1)) + min;
}
//좌표 설정
var presentRandom = function (ranNumX,ranNumY){
    target.style.left = `${ranNumX}px`;
    target.style.top =  `${ranNumY}px`;
}
//게임실행
var playGame = function(plusPoint,lifePoint){
    var printRandom = setInterval(function() {
        generateRandom(0,380);
        presentRandom(ranNumX,ranNumY);
        life.innerHTML = --lifePoint;
        if(lifePoint==0){
        alert("Game Over");
        clearInterval(printRandom);
        }
    }, 2000);
    // (2000 =2.0초)

    target.addEventListener('mousedown',(event) =>{
        point.innerHTML = ++plusPoint;
        target.style.display ='none';
        clearInterval(printRandom);
        
        target.style.display ='block';
        generateRandom(0,380);
        presentRandom(ranNumX,ranNumY);

        setTimeout(function()
        {
            printRandom = setInterval(function() {
                generateRandom(0,380);
                presentRandom(ranNumX,ranNumY);
                life.innerHTML = --lifePoint;
                if(lifePoint==0){
                    alert("Game Over");
                    clearInterval(printRandom);
                }
            }, 2000);
            // (2000 =2.0초)
        },0300);
    });
}


const target = document.getElementById('bug');
let point = document.getElementById('point');
const life = document.getElementById('life');

//랜덤좌표
let ranNumX = 0;
let ranNumY = 0;

// //점수
// let plusPoint = 0;
// let lifePoint = 10;

playGame(0,10);
