let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;
let grab = sliderContainer.style.cursor = 'grab';

sliderContainer.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = 'grabbing';
})

sliderContainer.addEventListener('mouseenter', (e) => {
    grab;
})

sliderContainer.addEventListener('mouseup', (e) => {
    grab;
    pressed = false;
})

sliderContainer.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startX}px`;
})

