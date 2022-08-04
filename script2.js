let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width = 
    `${document.querySelector('.slider').clientWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

    function goPrev() {
        currentSlider--;
        if(currentSlider < 0) {
            currentSlider = totalSlides -1;
        }
        updateMargin();
    }
    function goNext() {
        currentSlider++;
        if(currentSlider > (totalSlides -1)) {
            currentSlider = 0;
        }
        updateMargin();
    }
    function updateMargin() {
        let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
        let newMargim = (currentSlider * sliderItemWidth);
        document.querySelector('.slider--width').style.marginLeft = `-${newMargim}px`;
    }
    setInterval(goNext, 5000);