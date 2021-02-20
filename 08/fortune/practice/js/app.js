// おみくじオブジェクトの定義
let omikuji = {
  results: ["大吉", "吉", "中吉", "小吉", "凶"],
  getResult: function() {
    let results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}

console.log(omikuji.getResult());

/* Math.randomで「０〜１」の間でランダムに数字を作る（少数も含む）
   そこに「* results.length」をどうカッコ内で行うことで「０〜１」→「０〜配列の最大数」となる
    最後にMath.floorで生成した数字を整数化する。*/