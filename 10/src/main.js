// import sum from './sum';
import avg from './avg';
import random from './random';

// document.getElementById('debug').innerHTML = sum(10, 2);
document.getElementById('avg1').innerHTML = avg(1, 2, 3, 4, 5, 6);
document.getElementById('avg2').innerHTML = avg(1, 'a', 2);
document.getElementById('avg3').innerHTML = avg([1, 2, 3]);
document.getElementById('random1').innerHTML = random(0, 50, 100);
document.getElementById('random2').innerHTML = random(3);
document.getElementById('random3').innerHTML = random(0, 'a');
