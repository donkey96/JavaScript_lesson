/* プログラムで使用する変数の設定 ****************/
// フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea = document.getElementById('textarea');

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength');
/* イベントの処理 **************/
// お問い合わせボタンを押したとき
button.addEventListener('click', function() {
  // フォームの表示
  form.style.display = 'block';
});