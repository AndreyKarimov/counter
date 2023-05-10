let counter = 0;
let counterPlus = document.querySelector('.counter__plus');
let counterReset = document.querySelector('.counter__reset');
let counterText = document.querySelector('.counter__value');


counterPlus.addEventListener('click', function() {
    counter += 1;

    counterText.innerText = counter;
})
counterReset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
})

