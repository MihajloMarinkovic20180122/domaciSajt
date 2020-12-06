var slideIndex = 0;
showSlidesONama();

function showSlidesONama() {
    var ii;
    var slidess = document.getElementsByClassName("slajdovi");
    var dotss = document.getElementsByClassName("tacka");
    for (ii = 0; ii < slidess.length; ii++) {
      slidess[ii].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slidess.length) {slideIndex = 1}    
    for (ii = 0; ii < dotss.length; ii++) {
      dotss[ii].className = dotss[ii].className.replace(" active", "");
    }
    slidess[slideIndex-1].style.display = "block";  
    dotss[slideIndex-1].className += " active";
    setTimeout(showSlidesONama, 6000); // Change image every 6 seconds
  }
  var dateOnama = new Date();
  document.getElementById("datum_futer_oNama").innerHTML = dateOnama.toLocaleDateString();
  