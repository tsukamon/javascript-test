const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレーステーション２', 
  'ニンテンドースイッチ', 
  'ニンテンドーDS'];
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');

//クイズの問題文、選択を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};




//ボタンをクッリクしたら正誤判定
let handleIndex = 0;
const buttonLength = $button.length;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
