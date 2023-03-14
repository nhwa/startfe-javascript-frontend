
/* 로컬
$result.addEventListener('click', (event) => {
  const { className } = event.target;
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === '') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

formInput.init(todos);
render(todos);

-------------------
*/


import { render } from './html-render';
import formInput from './form-input';
import { loadData, saveData, deleteData, patchData } from './data-manager';

import './todos.css';


// const todos = loadData();
const $result = document.querySelector('#result');
const $inputForm = document.querySelector('#input-form');


const getTodos = () => {
  formInput.init();
  loadData((todos) => render(todos));
}

const addTodos = (e) =>{
    e.preventDefault();
    const todo = { id: '', text: formInput.todovalue(), isDone:false };
    saveData(todo, () => getTodos());
};

const deleteTodo = (e) =>{
  if(e.target.className !== 'delete') return;
  const id = e.target.parentElement.dataset.index;
  deleteData(id, () => getTodos());
}

const checkTodo = (e) =>{
if(e.target.type !=='checkbox') return;

const id = e.target.parentElement.dataset.index;

if(e.target.checked)
patchData(id, true , () => getTodos());
else
patchData(id, false , () => getTodos());
}



const init = () => {
  window.addEventListener('DOMContentLoaded', getTodos);
  $inputForm.addEventListener('submit', addTodos);
  $result.addEventListener('click', deleteTodo);
  $result.addEventListener('click', checkTodo);
};
  
init();
