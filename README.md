START-FE
=============
### 고급웹개발론 - 실습 저장소

#### SKILL
  `HTML5, CSS, JavasCript, React`
<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></p>


#### 목록
01_ ECMAScript - ES5 문법 기초 

02_ ECMAScript - ES5 CRUD 작성 및 for,객체, 함수, 입력값..

03_ ECMAScript - ES5 Dom 탐색, 생성 및 삽입, 삭제, eventlistner..  

04_ 간단한 이미지 슬라이드 / 체스판 그리기   

05_ ECMAScript - ES5 Dom 제어 실습, 재사용을 위한 함수화, mouse 이벤트 제어   

-------------

06_ ECMAScript  - ES6 기초문법, 화살표 함수
  - mouse이벤트 제어 (mousedown, mousemove, mouseup)
  - 구구단 출력 프로그램 (입력, 템플릿표현식 /^[0-9]{1,100}/g 사용, 숫자가 아닌 값 alert 경고메세지 출력)
  - 랜덤생성 타겟게임 제작(box 영역에서 랜덤 출현, 클릭시 +1, 못클릭할시 -1, 생명 0일때 gameover 메세지 출력)

-------------

07_ 최소, 최대 범위 랜덤값 프로그램  - 최소, 최대값 사이에 랜덤한 숫자를 출력
- 출력할때 숫자가 증가되는 에니메이션 효과(setInterval())
- 랜덤 숫자가 출력중에는 생성버튼이 비활성화

-------------

08_ html 내용 출력하기   - promise 비동기처리
- 성공 : quiz9.html 입력후 가져오기
- 에러 : https://daum.net 입력후 가져오기

`* SOP : 웹 브라우저에 내장된 보안 정책으로서 동일한 origin을 보유한 리소스만 접근 가능하도록 제한한다.`    
`origin은 도메인과 다르게 호스트뿐만 아니라 포트와 스키마까지 추가된 개념, 즉 동일 출처 정책`

- <script type=module> 은 로컬에서 실행시 자바스크립트 모듈 보안 요구로 인해 CORS 에러가 발생한다
- 로컬시스템에서 로컬 파일 리소스를 요청할 때는 origin(출처)이 null로 넘어가기 때문에 SOP가 적용되어 CORS 에러가 발생한다.   
- 서버에 올려 프로토콜 호스트 포트를 같게 만들어야 로컬파일 리소스 요청 가능   
=> _www.daum.net의 경우 CORS를 해결하지 못했으므로 에러나는게 당연_
  
-------------
  
09_ 카카오 검색 API 활용 다음 검색 구현 - url, contents 웹문서 내용 검색

10_ webpack 모듈번들러를 통한 평균과 랜덤 숫자를 구하는 모듈 구현
  
`* webpack : 모듈간의 의존 관계를 트리로 구성하여 하나의 번들 파일로 제공하게 되는데`   
`HTML 파일은 이 최종 번들 파일만을 참조할 수 있고 로딩 속도를 높힐 수 있다.`
  
  ![image](https://user-images.githubusercontent.com/44343908/221415514-4efbc4fe-6eca-47cc-9bfc-d518a720d31d.png)

-------------

11_ Todo List 관리 웹 어플리케이션
- 삽입, 삭제, 체크 기능
- 로컬 서버 이용
- Json 서버 이용 Restful API실습

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

![startfe1](https://user-images.githubusercontent.com/44343908/223637181-e896d377-8018-4590-a1f0-4e8f7978a28f.png)
![startfe2](https://user-images.githubusercontent.com/44343908/223637185-ff004f35-2650-4fef-adc8-d8f25f6ede0c.png)
![startfe3](https://user-images.githubusercontent.com/44343908/223637177-7af6745a-cba2-4582-af64-0f9b41b6c485.png)


https://user-images.githubusercontent.com/44343908/225211928-b1f8d4db-4a80-4df7-a1c5-f0e2ec22a671.mp4

-------------

13_ React 프레임워크를 사용한 Todo List 관리 웹 어플리케이션
=> 컴포넌트단위로 구현하여 재사용성 up
