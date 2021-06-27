function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var header=document.getElementsByClassName("medicine")[0];
mybutton = document.getElementById("brand");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}


function about() {
    closeNav();
  document.body.scrollTop = 450; 
  document.documentElement.scrollTop = 450;
}
var ser=document.getElementsByClassName("medicine")[0];
function services() {
    closeNav();
  document.body.scrollTop = ser.offsetTop; 
  document.documentElement.scrollTop = ser.offsetTop;
}
var con=document.getElementsByClassName("consult")[0];
function consult() {
    closeNav();
  document.body.scrollTop = con.offsetTop; 
  document.documentElement.scrollTop = con.offsetTop;
}
var cont=document.getElementsByClassName("contact")[0];
function contact() {
    closeNav();
  document.body.scrollTop = 3350; 
  document.documentElement.scrollTop = 3350; 
}
console.log(cont.offsetTop);

function home(){
    location.href="index.html";
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}