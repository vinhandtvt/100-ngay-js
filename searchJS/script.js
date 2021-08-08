// const input = document.getElementById("search");
// input.addEventListener("keyup", search);

// function search() {
//     const inputVal = input.value;
//     const li = document.getElementsByTagName("li");

//     for (i = 0; i < li.length; i++) {
//         if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

const input = document.getElementById('search');
input.addEventListener('keyup', search);


function search() {
    const inputVal = input.value;
    const li = document.getElementsByTagName('li');

    // console.log(li);
    for (let index = 0; index < li.length; index++) {
        if (li[index].innerHTML.toLowerCase().includes(inputVal)) {
            li[index].style.display = "";
        } else {
            li[index].style.display = "none";
        }


    }
}