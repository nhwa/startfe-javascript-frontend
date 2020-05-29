/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
function random() {
  let max = 0;
  let min = 0;
  let ranNum = 0;
  const count = arguments.length;
  // 인자가 두개이상일때 max는 제일 큰 값 min은 두번째로 큰 값
  if (count >= 2) {
    max = arguments[0];
    min = max;
    for (let i = 0; i < count; i++) {
      if (arguments[i] > max) {
        min = max;
        max = arguments[i];
      } else if (arguments[i] > min) min = arguments[i];
    }
    ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // 인자가 한개일때
  if (count === 1) {
    max = arguments[0];
    min = 0;
    ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // 숫자, 문자열이 섞인경우
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === typeof '') {
      ranNum = -1;
    }
  }

  return ranNum;
}

export default random;
