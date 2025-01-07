// initialise to start slideshow from beginning
let slideIndex = 0;

// function called by the next/prev arrow buttons to change the slide
function changeSlides(n) {
    showSlides(slideIndex += n)
}

// function to move slides along
function showSlides(n) {
    let i;
    
    // get a list of all the slide containers using the class name 
    let slides = document.getElementsByClassName("slideshow-pane");
    
    // if move too far right then loop back to start
    if(n >= slides.length) {
        slideIndex = 0;
    }

    // if move too far left then loop back to the last slide 
    if(n < 0) {
        slideIndex = slides.length;
    }

    // hide all slides
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // then display the current slide
    slides[slideIndex].style.display = "block";
}