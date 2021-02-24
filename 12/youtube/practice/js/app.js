// リクエストパラメータのセット
const KEY = 'AIzaSyAS9vJ4dzfUgwk3vtECjEXDJgsjCFK731s'; // API KEY
let url = 'https://www.googleapis.com/youtube/v3/search?'; // API URL
url += 'type=video';            // 動画を検索する
url += '&part=snippet';         // 検索結果に全てのプロパティを含む
url += '&q=music';              // 検索ワード このサンプルでは music に指定
url += '&videoEmbeddable=true'; // webページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true'; // youtube.com 以外で再生できる動画のみに限定
url += '&maxResults=6';         // 動画の最大取得数
url += '&key=' + KEY;           // API KEY
// 動作確認
console.log(url);