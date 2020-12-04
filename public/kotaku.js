function loadKotakuRss(result) {
  result = xmlToJson(result);
  var items = result['rss']['channel']['item'];

  var rand = Math.round(Math.random() * 1000000) % 50;

  var kotakuPic = "";
  for (var i = 0; i < items.length; i++) {
    if (rand == i) {
      kotakuPic += '<img src="' + items[i]['enclosure']['@attributes']['url'] + '"style="max-width:100%;max-height:100%;" alt="Wow, RSS Feeds are AMAZING!" >';
    }
  }
  // Set the HTML
  $("#kotaku_enabler").html(kotakuPic);
}

function requestNasaRss() {
  // Load chocolates JSON
  $.ajax({
    dataType: "xml",
    url: "http://kotaku.com/tag/kotakucore/rss",
    success : loadKotakuRss
  });
}

function requestRSSFeeds() {
  requestKotakuRss();
}

$("#kotaku_button").click(function() {
  requestRSSFeeds();
})
