/* 変数定義 ***********************/
// ジャンケンの手の番号を設定
const GU    = 1;
const CHOKI = 2; // 番号を定数に代入
const PA    = 3;

/* 関数定義 ***********************/
// 人間に手を入力してもらう機能
function getHumHand() {  // 関数にする
  let hum = prompt('半角数字で1~3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
  hum = parseInt(hum, 10);
  if (hum !== GU && hum !== CHOKI && hum !== PA) {
    return undefined;
  } else {              // 戻り値を返す
    return hum;
  }
}

// コンピュータの手を決める
function getComHand() {
  return Math.floor(Math.random() * 3) + 1; // 関数を追加
}

// コンピュータの手の名前を取得
function getHandName(num) {
  switch (num) {
    case GU:
      return 'グー';
    case CHOKI:
      return 'チョキ';
    case PA:
      return 'パー';
  }
}

// 結果の判定
function getResult (com, hum) {
  if (hum === com) {
    return '結果はあいこでした。';
  } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
    return '勝ちました。';
  } else {
    return '負けました。';
  }
}

/* 実行する処理 ***********************/
let hum = getHumHand();
/* console.log(hum);         関数を呼び出す
                             コンソールを使って動作確認。終わり次第削除(今回はコメントアウトしておく) */
if (!hum) { // 入力値をチェック
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
  let com = getComHand();
  // console.log(com); 確認用なので確認後は削除
}