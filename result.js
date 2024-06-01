// result.js

// 결과를 표시할 HTML 요소를 가져옴
const resultElement = document.getElementById('result');

// 로컬 스토리지에서 저장된 결과를 가져옴
const mbtiResult = localStorage.getItem('mbtiResult');

// 결과가 있을 경우 화면에 표시함
if (mbtiResult) {
  resultElement.textContent = `당신의 MBTI 유형은 ${mbtiResult} 입니다.`;
} else {
  resultElement.textContent = '결과를 찾을 수 없습니다. 다시 시도해 주세요.';
}
