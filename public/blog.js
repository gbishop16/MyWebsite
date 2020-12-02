function loadBlogJSONAsHTML(result) {
  var article = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];
    article += "<h2>" + nextResult['headline'] + "</h2>" + "<p>" + nextResult['body']+"</p>";
  }
  $("#list_blogs").html(article);
}
function requestBlogData() {
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success : loadBlogJSONAsHTML,
  });
}
$("#blog_list_button").click(function() {
  requestBlogData();
})
