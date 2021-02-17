let budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);

let isHungry = confirm('お腹は空いていますか？');

if (true !== isHungry){
  alert('今日はご飯はいいや');
} else if (budget >= 1500) {
  alert('ピザを注文しました');
} else if (budget >= 500) {
  alert('ポテトを買いました');
} else {
  alert('節約、節約...');
}