import { saveData } from './data-manager';

const $result = document.querySelector('#result');

const render = (data) => {
  const html = data.map((todo) => {
    return `<li key=${todo.id} data-index=${todo.id}>
  <input type="checkbox" class="toggle-checked" 
  ${
    todo.isDone ? 'checked' : '' 
  }/>
  <span class="text">${todo.text}</span>
  <button class="delete">x</button>
  </li>`;
  });
  $result.innerHTML = `<ul>${html.join('')}</ul>`;
}

export { render };
