const inputs = document.querySelectorAll("form input");
const email = inputs[0];
const password = inputs[1];

// email.className = " " + "error";
// email.classList.toggle("validate");
// console.log(email.className);

const buttons = document.querySelectorAll("form button");

// buttons.forEach(function(button) {
//     button.addEventListener()
// })

const showPasswordButton = buttons[0];
const loginButton = buttons[1];
// console.log(showPasswordButton);

// showPasswordButton.onclick = onShowPasswordClick;
// showPasswordButton.onclick = null;

function onShowPasswordClick(event) {
    event.target.innerText = password.type === "password" ? "hide password" : "show password";
    password.type = password.type === "password" ? "text" : "password";

    // if (password.type === "password") {
    //     password.type = "text";
    //     showPasswordButton.innerText = "hide password";
    // } else {
    //     password.type = "password";
    //     showPasswordButton.innerText = "show password";
    // }
}

showPasswordButton.addEventListener("click", onShowPasswordClick);

loginButton.addEventListener("click", onShowPasswordClick);
