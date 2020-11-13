function unloadContent(){
  $("#main_container").html('');
}
$("#main_container").removeClass("start");

function loadContent(){
  unloadContent();
  $("#main_container").addClass("heading")
}
document.getElementById("rick_roll").onclick = function (){
  location.href = "https://www.youtube.com/watch?v=YddwkMJG1Jo";
}
