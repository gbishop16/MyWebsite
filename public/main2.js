function unloadContent(){
  $("#main_container").html('');
}
$("#main_container").removeClass("start");

function loadContent(){
  unloadContent();
  $("#main_container").addClass("heading")
}
function loadGameContent(result){
  $('#game_content').html(result);
}
if(document.getElementById("open_game"))
{
document.getElementById("open_game").onclick = function (){
  $.ajax({url: "game.html", success: loadGameContent});
}
}
if(document.getElementById("open_game"))
{
document.getElementById("rick_roll").onclick = function (){
  location.href = "https://www.youtube.com/watch?v=YddwkMJG1Jo";
}
}
document.getElementById("game_page").onclick = function (){
  location.href = "game.html";
}
document.getElementById("github_link").onclick = function (){
  location.href = "https://github.com/gbishop16/MyWebsite";
}
document.getElementById("about_me").onclick = function (){
  location.href = "aboutme.html";
}
document.getElementById("home_page").onclick = function (){
  location.href = "index.html";
}
