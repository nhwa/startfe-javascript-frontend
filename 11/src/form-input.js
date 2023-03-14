const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

const init = () => {
  $input.value = '';
  $inputForm.focus();
}

const todovalue = () => {
  return  $input.value;
}

export default {
  init, todovalue
};
