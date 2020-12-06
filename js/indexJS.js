var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slajdoviIndex");
  var dots = document.getElementsByClassName("tacka");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}
var date = new Date();
document.getElementById("datum_futer").innerHTML = date.toLocaleDateString();

// var slikaLeto = document.getElementById("slikaLeto")
// slikaLeto.onclick=function() {myFunction()};

// function myFunction() {
  
// }
// $(document).ready(function() {
//   $('img.slika').click(function() {
//       window.location.href = "../stranice/putovanja.html";
//   });
// // });
// function otvoriStranicu(){
//   // // window.location.href = "../stranice/putovanja.html";
//   // window.open="../stranice/putovanja.html";
  
//   alert('kliknuto je dugme');
// }
// let slikaZaKlik = document.getElementsByClassName("slika");
// slikaZaKlik.addEventListener("click", function(){ alert("Hello World!"); });

