const btn = document.querySelector('.btn');
const input = document.querySelector('.input-text');
const result = document.querySelector('.result');

const checkPal = () => {
    let text = input.value;
    let a = text.split('');
    let b = a.reverse();

    if (a.every((item, index) => item === b[index])) {
        result.innerHTML = `${text} is Palindrome!`
    } else {
        result.innerHTML = `${text} is not Palindrome!`
    }
}

const checkVol = () => {
    let text = input.value;
    let vol = 0;
    let originVol = 'aeiou';
    text.replaceAll(' ', '').split('').forEach(element => {
        if (originVol.includes(element.toLowerCase())) {
            vol += 1;
        }
    });

    result.innerHTML = `${text} have ${vol} vowels!`
}

btn.addEventListener('click', checkVol)

