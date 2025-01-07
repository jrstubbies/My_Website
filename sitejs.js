let slideIndex = 0;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow-pane");
    
    // if move too far right then loop back to start
    if(n >= slides.length) {
        slideIndex = 0;
    }

    // if move to the left too far then loop back to the last slide 
    if(n < 0) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}