
/*
//local server
function saveData(data) {
  console.log('todos:', data);
  localStorage.setItem('data', JSON.stringify(data));
}
function loadData() {
  // local storage 이용
  const dataString = localStorage.getItem('data') || '[]';
  return JSON.parse(dataString);
}
*/


  // GET (Read)
  function loadData(callback){
    // JSON 서버 이용
    fetch('http://localhost:3000/todos',{
      method: 'GET'
      }).then(response => response.json())
        .then((data) => {
          callback(data)
    }).catch((error) => console.log(error));
  }
  //POST 
  function saveData(data, callback) {
    // console.log(data);
    fetch('http://localhost:3000/todos',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((response) => { 
        callback(response)
    }).catch((error) => console.log(error));
  }
  //PATCH
  function patchData(id, done, callback){
    fetch(`http://localhost:3000/todos/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ isDone: done }),
        })
        .then((response) => { 
          callback(response)
      }).catch((error) => console.log(error));
  }
  //DELETE
  function deleteData(id, callback){
    fetch(`http://localhost:3000/todos/${id}`,{
        method: 'DELETE', 
        headers: {
          'Content-type': 'application/json',
        }})
        .then((response) => { 
          callback(response)
      }).catch((error) => console.log(error));
  }
    


export { loadData, saveData, deleteData, patchData };
