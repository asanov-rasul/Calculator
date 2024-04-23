let display = document.querySelector('.clt-screen');
const buttons = Array.from(document.querySelectorAll('.buttons'));


buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            switch(e.target.innerText) {
                case 'AC':
                    display.innerText = '0';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch (e) {
                        display.innerText = 'Error!'
                    }
                    break;
                case '+/-':
                    display.innerText = '-';
                    break;
                case '%':
                    display.innerText /= 100;
                    break
                default:
                        if (display.innerHTML.trim() === '0' && e.target.innerText != '.') {
                        display.innerText = e.target.innerText
                    } else {
                        display.innerText += e.target.innerText
                    }
            }   
        }
    })
})