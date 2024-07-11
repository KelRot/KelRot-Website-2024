/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  console.log("opened");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  console.log("closed")
}

/* SLIDESHOW ------------------------------------------------------------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetInterval();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetInterval();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

// Automatic slideshow
function autoSlides() {
  plusSlides(1);
}

// Set the interval for the automatic slideshow
let slideInterval = setInterval(autoSlides, 4000);

// Pause the automatic slideshow on mouseover
document.querySelector('.slideshow-container').addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume the automatic slideshow on mouseout
document.querySelector('.slideshow-container').addEventListener('mouseout', function() {
  slideInterval = setInterval(autoSlides, 4000);
});

// Reset the interval for manual controls
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlides, 4000);
}

// Countdown timer JavaScript code ------------------------------------------------------------------------
const targetDate = new Date("January 4, 2025 00:00:00").getTime();

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `${days} : ${hours} : ${minutes}`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "SEZON BAŞLADI";
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 60000); //