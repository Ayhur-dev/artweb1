let slideIndex = 0;

// Function to show the slides
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide after the last one
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Call the function every 5 seconds
setInterval(showSlides, 5000); // Change the slide every 5000ms (5 seconds)

// Initialize the first slide when the page loads
showSlides();
