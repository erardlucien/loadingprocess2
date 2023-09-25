let textContainer = document.querySelector('.text-container');
let text = document.querySelector('.text');
let counter = 0;

function countdown() {

    if(textContainer.classList.contains('text-container-active') && counter < 100) {
        text.textContent = `${ counter += 1 }%`;
        timeout = setTimeout(countdown, 15); 
    } else {
        clearTimeout(timeout);
    }

}

setTimeout( () => {
    textContainer.classList.add('text-container-active');
    setTimeout(countdown, 500);          
}, 100);