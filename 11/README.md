# Todo List 만들기

> json-server를 이용해 REST API 실습



https://user-images.githubusercontent.com/44343908/224889422-98a70007-2858-435d-abd2-0f81b65a88b2.mp4



```

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
    
```
