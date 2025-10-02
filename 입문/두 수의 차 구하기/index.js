//정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

//제한사항
//-50000 ≤ num1 ≤ 50000
//-50000 ≤ num2 ≤ 50000

// 입출력 예

/* 
num1 num2 result
2     3     -1
100   2     98
*/

// 문제
function solution(num1, num2) {
  var answer = -1;
  return answer;
}


// 정답
function solution(num1, num2) {
  var answer = num1 - num2
  return answer;
}

// 풀이 : 나머지 연산자 사용. 매개변수 num1을 num2를 받아 변수에 num1 - num2 할당하고 결과 값에 변수를 반환합니다.