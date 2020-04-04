console.log('app');

//Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

//Read

todos.forEach(function(todo){
    console.log(todo);
});

//Update

//findIndex : 배열의 인덱스를 찾아 접근
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

/*map: 모든 요소에 대해 주어진 함수를
호출해 나온 값을 다 모아 새로운 배열 형태로 만듦 */
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var newTodos = todos.map(function(todo) {
//   if (todo === updateTodo) {
//     return '공부';
//   }
//   return todo;
// });
// console.log(newTodos);

//Delete

// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// 자바스크립트는 동적 타이핑이 가능(알아서 변환)

/* 원시타입: 데이터의 값 저장 - call by value
   참조타입 : 데이터의 참조만 저장 - call by reference */

// var isMan = false;
// if (isMan) {
//     console.log('1');
// }else if(!isMan && isHero){

// }else{
//     console.log('2');
// }

// (window.생략//)alert('안녕하세요');
// var who = prompt('당신은 누구세요?');
// console.log(who);

// var isDelete = confirm('정말 삭제합니까?');
// console.log(isDelete);

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(1,2));

// var car = {
//     year: '2014',
//     starting: function() {
//       console.log('starting..');
//     },
//   };
  
//   car.starting();

/* 선언한 변수들을 외부에서 사용할 수 
없으므로 캡슐화 효과! */
// (function() {
//   var a = 'a';
//   console.log(a);
// })();

function sum(x, y) {
  if (!y) y = 1;
  console.log(x + y);
}
console.log(sum(3));
console.log(sum(3,3));




