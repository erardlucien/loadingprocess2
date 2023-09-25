let textContainer = document.querySelector('.text-container');
let text = document.querySelector('.text');
let counter = 0;

function countdown() {

    if(textContainer.classList.contains('text-container-active') && counter < 100) {
        text.textContent = `${ counter += 10 }%`;
        timeout = setTimeout(countdown, 300); 
    } else {
        clearTimeout(timeout);
    }

}

setTimeout( () => {
    textContainer.classList.add('text-container-active');
    setTimeout(countdown, 100);          
}, 100);