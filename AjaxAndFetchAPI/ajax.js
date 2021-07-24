// // LOAD ALL USERS

// const btn = document.getElementById("btn");
// btn.addEventListener("click", getUsers);

// // CREATE FUNCTION GETUSERS
// function getUsers(e) {
//     e.preventDefault();

//     const http = new XMLHttpRequest();

//     http.open("GET", "users.json", true);

//     http.onload = function() {
//         if (this.status === 200) {
//             // console.log(this.responseText);

//             const users = JSON.parse(this.responseText);

//             let output = "";
//             users.forEach(function(user) {
//                 output += `
//                     <hr>
//                     <ul>
//                         <li>ID: ${user.id}</li>
//                         <li>Name: ${user.name}</li>
//                         <li>Age: ${user.age}</li>
//                         <li>Email: ${user.email}</li>
//                     </ul>
//                 `;
//             })

//             document.getElementById("users").innerHTML = output;

//         }
//     }

//     http.send();
// }



//load all users

const btn = document.getElementById('btn');
btn.addEventListener('click', getUsers);


// Create function getUsers
function getUsers(e) {
    e.preventDefault();

    const http = new XMLHttpRequest();
    http.open('GET', 'users.json', true);
    // true for async 

    http.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)
            const users = JSON.parse(this.responseText);
            let output = '';
            users.forEach(user => {
                output += `
                    <hr />
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>age: ${user.age}</li>
                        <li>email: ${user.email}</li>
                    </ul>
                `
            });
            document.getElementById('users').innerHTML = output;
        }
    }

    http.send();
}
