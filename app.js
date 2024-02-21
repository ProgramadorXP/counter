const value = document.getElementById('value');
const buttons = document.querySelectorAll('button');

let count = 0;

const checkButton = (e) => {
    const button = e.target.classList;
    if(button.contains('increase')) {
        count++;
    } else if(button.contains('decrease')) {
        count--;
    } else {
        count = 0;
    }
    value.textContent = count;
    if(count > 0) {
        value.style.color = 'green';
    } else if(count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = "#102a42";
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', checkButton);
});