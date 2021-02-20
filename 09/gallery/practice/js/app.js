// アルバムデータの作成
let album =  [
  {src: 'img/1.jpg', msg: '山道の緑が気持ちいい'},
  {src: 'img/2.jpg', msg: '階段がきつかった'},
  {src: 'img/3.jpg', msg: '高尾山薬王院！'},
  {src: 'img/4.jpg', msg: '帰りはロープウェイでスイスイ'},
  {src: 'img/5.jpg', msg: '〆のお蕎麦です'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;