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