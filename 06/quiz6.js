//숫자인지 판단
var numCheck = function(obj){
    const chk = /^[0-9]{1,100}/g;
    if(!chk.test(obj.value)){
        alert("숫자를 입력해주세요!");
        obj.focus();
    }
    else
        return true;
}
//구구단 함수
var gugudan =  function(num){
    if(numCheck(num)){
      result.innerHTML="";
        for(let i = Number(num.value); i<Number(num.value)+1; i++){
            for(let j = 1; j<10; j++){
              let text = `${i} * ${j} = ${i*j}<br />`;
              result.innerHTML += text;
            }
        }
    }
  }

  const input = document.getElementById("num");
  const button = document.getElementById('btn');
  const result = document.getElementById('result');

  button.addEventListener('click',(event) =>{
    gugudan(input);
  });