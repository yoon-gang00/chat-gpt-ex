// result.js

// 결과를 표시할 HTML 요소를 가져옴
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

// 로컬 스토리지에서 저장된 결과를 가져옴
const mbtiResult = localStorage.getItem('mbti_result');

// 결과가 있을 경우 화면에 표시함
if (mbtiResult) {
  resultElement.textContent = `${mbtiResult}입니다!`;
} else {
  resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
  restartButton.textContent = '테스트 하러 가기';
}
