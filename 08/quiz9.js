const $url = document.querySelector('#url');
const $btn = document.querySelector('#button');
const $log = document.querySelector('#log');

function writeText(element) {
  $log.innerHTML = element;
}

function fetchUrl(urltext) {
  if (!urltext) {
    window.alert('url를 입력하세요');
  } else {
    const promise = fetch(urltext);
    promise
      .then((res) => {
        const text = res.text();
        text.then((data) => {
          writeText(data);
        });
      })
      .catch((error) => {
        writeText(error);
      });
  }
}
$btn.addEventListener('click', (event) => {
  fetchUrl($url.value);
});

$url.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    fetchUrl($url.value);
  }
});
