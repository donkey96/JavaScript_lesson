$(function () {
  $('#btn').on('click', function () {
   // 入力された郵便番号でWebAPIに住所情報をリクエスト
    $.ajax({
      url : "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType : 'jsonp',
    })
  })
});

