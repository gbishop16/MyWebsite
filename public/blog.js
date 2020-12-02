function loadBlogJSONAsHTML(result) {
  var aString = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];
    aString += "<h2>" + nextResult['type'] + "</h2>";
  }
  $("#list_blogs").html(aString);
}
function requestBlogData() {
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/mywebsite-196fb.appspot.com/o/blogArticles.json?alt=media&token=5524bd20-afa6-4f6a-9899-bf0d7f4e9405",
    success : loadBlogJSONAsHTML,
  });
}
requestBlogData();
