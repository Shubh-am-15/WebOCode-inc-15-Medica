/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var header=document.getElementsByClassName("medicine")[0];
// window.onscroll=function() {position()};
mybutton = document.getElementById("brand");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function services() {
    closeNav();
  document.body.scrollTop = 450; // For Safari
  document.documentElement.scrollTop = 450; // For Chrome, Firefox, IE and Opera
}
var con=document.getElementsByClassName("consult")[0];
function consult() {
    closeNav();
  document.body.scrollTop = con.offsetTop; // For Safari
  document.documentElement.scrollTop = con.offsetTop; // For Chrome, Firefox, IE and Opera
}
var cont=document.getElementsByClassName("contact")[0];
function contact() {
    closeNav();
  document.body.scrollTop = cont.offsetTop; // For Safari
  document.documentElement.scrollTop = cont.offsetTop; // For Chrome, Firefox, IE and Opera
}
function home(){
    location.href="index.html";
}