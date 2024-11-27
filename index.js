const back = document.getElementById('back');
const slides = document.querySelectorAll(".photoes img")
const next = document.getElementById('next')
const points = document.querySelectorAll('#points')

let currentIndex = 0;

function showSlider(){
    slides.forEach(slides => slides.classList.remove("block"));
    slides[currentIndex].classList.add("block")
}

function nextSlide(){
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlider()
}
function previousSlide(){
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlider()
}