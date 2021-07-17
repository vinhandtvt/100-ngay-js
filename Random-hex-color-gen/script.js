const btn = document.querySelector('.generate');
const hex = document.querySelector('.hex');

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = '#' + randomColor;
    hex.innerHTML = '#' + randomColor;
}

// let color = Math.random();

// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

btn.addEventListener('click', generateColor)