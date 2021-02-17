let isHungry = confirm('お腹は空いていますか？');

if (true !== isHungry){
  alert('今日はご飯はいいや');
} else {
  let budget = prompt('所持金を数字で入力してください');
  budget = parseFloat(budget);
  if (budget >= 1500) {
    let pizaCheck = confirm('ピザを食べますか？')
    if (pizaCheck === true){
      alert('ピザを注文しました');
    } else {
      alert('他のものを検討しましょう');
    }
  } else if (budget >= 500) {
    let potetCheck = confirm('ポテトを食べますか？')
    if (potetCheck === true){
      alert('ポテトを買いました');
    ;
    } else {
      alert('他のものを検討しましょう');
    }
   } else {
    alert('節約、節約...');
  }
}