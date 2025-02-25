// ----- SLIDER ----

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("slide_caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn"); // Get the button that opens the modal

// Create reference to the modal for all images using a class!
var images = document.getElementsByClassName('myImages');

// Get each image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01"); 
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {      // click on <img> to run function 
    modal.style.display = "block";    // function will display modal using class 
    modalImg.src = this.src;           // var modalImg gets <img> src  
    captionText.innerHTML = this.alt;  // var captionText gets <img> alt  
  }
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  const currentActiveSlide = document.querySelector('.demo.active');
  modalImg.src = currentActiveSlide.src;
  captionText.innerHTML = currentActiveSlide.alt;
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

