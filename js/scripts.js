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


/*slide show on the home page*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

/* FIX THE FUCKING ARROWS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/

// Countdown timer JavaScript code
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