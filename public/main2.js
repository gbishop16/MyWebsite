
var cookie = document.cookie;
if(!cookie){
  cookie = 1;
}
cookie++;
document.cookie = cookie;

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

if(document.getElementById("open_game")){
document.getElementById("open_game").onclick = function (){
  $.ajax({url: "game.html", success: loadGameContent});
}
}
if(document.getElementById("rick_roll")){
document.getElementById("rick_roll").onclick = function (){
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
}
if(document.getElementById("json_page")){
document.getElementById("json_page").onclick = function (){
  location.href = "blog.html";
}
}
if(document.getElementById("github_link")){
document.getElementById("github_link").onclick = function (){
  location.href = "https://github.com/gbishop16/MyWebsite";
}
}
if(document.getElementById("about_me")){
document.getElementById("about_me").onclick = function (){
  location.href = "aboutme.html";
}
}
if(document.getElementById("home_page")){
document.getElementById("home_page").onclick = function (){
  location.href = "index.html";
}
}
if(document.getElementById("tech_spec")){
document.getElementById("tech_spec").onclick = function (){
  location.href = "https://docs.google.com/document/d/11KRt5S18rvGJxmNQHIDBENf6uVg6nR6VkC93a2m3XCg/edit";
}
}
if(document.getElementById("kotaku_button")){
document.getElementById("kotaku_button").onclick = function (){
  location.href = "kotaku.html";
}
}
