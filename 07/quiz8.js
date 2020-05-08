const randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const btnOn = function () {
  const btn = document.getElementById('btn');
  btn.disabled = false;
};
const btnOff = function () {
  const btn = document.getElementById('btn');
  btn.disabled = true;
};

const animationNum = function (ranNum) {
  let startNum = 0;
  if (ranNum >= 10 || ranNum <= -10) startNum = Math.floor(ranNum / 10);
  // ranNum이 10 이상이거나 -10 이하일경우 숫자가 10분의1씩 변화
  else if (ranNum >= 2 || ranNum <= -2) startNum = Math.floor(ranNum / 2);
  // ranNum이 2 이상이거나 -2 이하일경우 숫자가 2분의1씩 변화
  else startNum = ranNum;

  const box = document.getElementById('box');
  let printNum = startNum;
  box.innerHTML = printNum;

  const incNum = setInterval(function () {
    printNum = Number(printNum + startNum);
    box.innerHTML = printNum;
    if (ranNum >= 0) {
      // ranNum이 양수인경우
      if (printNum >= ranNum) {
        clearInterval(incNum);
        box.innerHTML = ranNum;
        btnOn();
      }
    } else if (ranNum < 0) {
      // ranNum이 음수인경우
      if (printNum <= ranNum) {
        clearInterval(incNum);
        box.innerHTML = ranNum;
        btnOn();
      }
    }
  }, 100);
};

const btn = document.getElementById('btn');
let min = 0;
let max = 0;
let ranNum = 0;

btn.addEventListener('click', (event) => {
  btnOff();
  min = Number(document.getElementById('min').value);
  max = Number(document.getElementById('max').value);
  ranNum = randomNum(min, max);
  animationNum(Number(ranNum));
});
