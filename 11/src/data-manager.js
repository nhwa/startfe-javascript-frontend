function saveData(data) {
  console.log('todos:', data);
  localStorage.setItem('data', JSON.stringify(data));
}
function loadData(/* JSON 서버 이용시 callback */) {
  //local storage 이용
  const dataString = localStorage.getItem('data') || '[]';
  return JSON.parse(dataString);

  /*JSON 서버 이용
    fetch('http://localhost:3000/todos').then((response) => {
      response.json().then((data) => {
        callback(data);
      });
    });
    */
}

export { saveData, loadData };
