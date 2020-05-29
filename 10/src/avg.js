/* eslint-disable prefer-rest-params */
/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */

function avg(array) {
  // 배열일 경우
  if (typeof array === typeof []) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum / array.length;
  }
  // 숫자, 문자열이 섞인경우
  let sum = 0;
  const count = arguments.length;
  let finalCount = count;
  for (let i = 0; i < count; i++) {
    if (typeof arguments[i] === typeof '') {
      arguments[i] = 0;
      finalCount = finalCount - 1;
    }
    sum = sum + arguments[i];
  }
  return sum / finalCount;
}

export default avg;
