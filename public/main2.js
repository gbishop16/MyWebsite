document.getElementById("contact").onclick = function (){
  location.href = "contactinfo.html";
}
document.getElementById("education").onclick = function (){
  location.href = "education.html";
}
document.getElementById("experience").onclick = function (){
  location.href = "experience.html";
}
document.getElementById("qualifications").onclick = function (){
  location.href = "qualifications.html";
}
if(document.getElementById("open_game")){
  document.getElementById("open_game").onclick = function (){
    $.ajax({url: "game.html", success: loadGameContent});
  }
}
if(document.getElementById("rick_roll")){
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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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

if(document.getElementById("tech_spec")) {
  document.getElementById("tech_spec").onclick = function (){
    location.href = "https://docs.google.com/document/d/11KRt5S18rvGJxmNQHIDBENf6uVg6nR6VkC93a2m3XCg/edit";
  }
};
