$(function() {
  $('#btn').on('click', function() {
   // 入力された郵便番号でWebAPIに住所情報をリクエスト
    $.ajax({
      url : "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType : 'jsonp',
    }).done(function(data) {
      if (data.results) {
      // データが取得できたときの処理を書く
      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data) {
      alert('通信に失敗しました');
    });
  });
});

