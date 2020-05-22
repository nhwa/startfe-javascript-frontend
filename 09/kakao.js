/* eslint-disable no-plusplus */
const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $viewMore = document.querySelector('#viewMore');
let $pagenum = 1;
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 4b0b6a9ddc10bd6e2e821f2d1b32a0c2' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });
  $result.innerHTML += `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
  $viewMore.style.display = 'block';
  $pagenum++;
}

function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올 수 없습니다!');
}

function fetchData() {
  fetch(`${url}?query=${$text.value}&page=${$pagenum}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
}
function search() {
  if ($text.value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }
  fetchData();
  return true;
}

$btn.addEventListener('click', search);
$viewMore.addEventListener('click', fetchData);
