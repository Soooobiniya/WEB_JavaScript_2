# WEB_JavaScript_2
## JavaScript Promise (callback &amp; async)

### 2023.04.12 ~ 2023.04.12
***
첫번째 실습
* callback 함수란?
=> 파라미터로 함수를 전달하는 함수. 즉, 파라미터를 함수로 전달받아 함수의 내부에서 실행하는 함수이다.

1. fillter 함수는 callback 함수를 소비하는 함수
2. 익명 함수 사용법: 함수 정의 없이 파라미터 자리에 function(element) {함수 내부 코드} 입력
-> 더 간단하게 하려면 '화살표' 이용: 파라미터 자리에 (element) => {함수 내부 코드} 입력
-> 파라미터가 하나인 경우엔 element에 '()' 안해줘도 됨
-> 함수 내부 코드가 한 줄인 경우엔 'return', '{}' 안해줘도 됨
3. 직접 filter 함수와 똑같이 동작하는 함수 만들기 => 1.js 확인!
***
두번째 실습
* Synchronous(동기)란? 프로그램이 순차적으로 실행되는 방식
* Asynchronous(비동기)란? 프로그램이 병렬적으로 실행되는 방식

1. 서버와의 통신 시 Async 사용
2. fetch() 함수는 promise, fetch() 함수에서 ".then"이 의미하는 것이 promise
3. 어떤 함수의 return 값이 promise라면 그 함수는 비동기적으로 동작하는 함수일 가능성이 매우 높음
4. fetch()함수의 메소드: 1) then() , 2) catch()
-> then(), catch() 둘 다 함수를 인자로 받음
-> then(), catch() 둘 다 callback 함수를 받음!
-> 1) then은 fetch를 통해서 실행한 결과가 성공했을 때, then으로 전달된 callback 함수가 호출되도록 약속됨 / 약속된 결과가 나옴
-> 2) catch는 fetch를 통해서 실행한 결과가 실패했을 때, catch로 전달된 callback 함수가 호출되도록 약속됨 / 실패한 이유를 알려줌
5. promise는 then, catch 모두 promise를 return
***
세번째 실습
* async란? 평범한 함수를 promise를 return하는 비동기적인 함수로 만들어주는 키워드
=> 따라서 이 함수 안에서는 await이라는 비동기적인 함수를 사용할 수 있게 됨

1. timer 함수 사용
2. 비동기적인 코드임을 알리기 -> 'await'을 앞에 붙임
3. then 안의 callback의 첫번째 파라미터는 'await'을 사용하면 그 timer의 return값으로 받을 수 있음
4. 'await'을 사용하기 위해선 꼭! 'async' function 정의 후 사용
5. 'async'를 함수 앞에 붙이면 그 함수는 promise를 암시적으로 return
-> 즉, 'async'를 붙인 함수 앞에는 또 'await'을 붙일 수 있다는 뜻!
***
네번째 실습 - 내가 정의한 Promise 만들기
1. then 안에 또 다른 then이 있는 구조 => nestic 방식
2. return 후에 then을 사용하는 구조 => chainning 방식 (보통 이 방식을 선호)
3. catch 사용 후에 return Promise.reject()하면 더 이상 진행되지 않고 프로그램 종료
***
다섯번째 실습
* Promise.all()이란? 여러개의 작업이 동시에 시작됐을 때, 가장 늦게 끝나는 작업이 끝난 후에 다음 작업이 시작되는 방식을 처리 가능한 명령어
* Promise.race()이란? 여러개의 작업이 동시에 시작됐을 때, 가장 빨리 끝나는 작업이 끝난 후에 나머지 작업들은 버리고, 다음 작업이 시작되는 방식을 처리 가능한 명령어

1. Promise.all(), Promise.race() 둘 다 파라미터로 배열이 들어와야 함
2. console의 메소드 중 time/timeEnd는 콘솔에 타이머를 표시해줌
