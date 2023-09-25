let textContainer = document.querySelector('.text-container');
let text = document.querySelector('.text');
let counter = 0;
let timeout;
let timeout2;

function countdown() {

    if(textContainer.classList.contains('text-container-active') && counter < 100) {
        text.textContent = `${ counter += 10 }%`;
        if(counter === 100) {
            text.textContent = 'I am happy.';
            counter = 0;
        }
        timeout = setTimeout(countdown, 300); 
    } else {
        clearTimeout(timeout);
    }

}

(
    function active() {

        setTimeout( () => {
            textContainer.classList.toggle('text-container-active');
            if(textContainer.classList.contains('text-container-active')) {
                timeout2 = setTimeout(countdown, 100);
            } else {
                clearTimeout(timeout2);
            }          
        }, 100);

        setTimeout(active, 3000);
    }
)();