const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const buttons = document.querySelector('.buttons');
const setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = 'yellow'
    } else if (count.innerHTML < 0) {
        count.style.color = 'red'
    } else {
        count.style.color = "orange"
    }
}

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor();
    }
})






// add.addEventListener('click', () => {
//     count.innerHTML++; // increate the value by 1

// })
// sub.addEventListener('click', () => {
//     count.innerHTML--;
// })

// resetCount.addEventListener('click', () => {
//     count.innerHTML = 0;
// })