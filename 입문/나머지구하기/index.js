//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
//제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 입출력 예

/* 
num1 num2 result
3     2     1
10    5     0
*/

// 문제
function solution(num1, num2) {
  var answer = -1;
  return answer;
}


// 정답
function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

// 풀이 : 나머지 연산자 사용. 매개변수 num1을 num2를 받아 변수에 num1 % num2 할당하고 결과 값에 변수를 반환합니다.