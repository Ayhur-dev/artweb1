let slideIndex = 1;
showSlide(slideIndex);

function myslide(n) {
    showSlides(slideIndex += n);
}

function showSlide(n) {
   let slides = document.getElementsByClassName("slides");


   if (n > slides.lenght) {
  slideIndex = 1;
   }


   if (n < 1) {
    slideIndex = slides.lenght;
   }

   for (let i = 0; 1 < slides.lenght; i++) {
    slides[i].style.display = "none";
   }

   slides[slideIndex - 1].style.display = "block";
}

