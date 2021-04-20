let body = document.querySelector('body');



createForm();
let form = document.querySelector('form');
for (let i = 0; i < 5; i++) {
    createInput();

}
createSubmit();
let submit = document.querySelector('.submit');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.insertBefore(createInput(), submit);


});
// form.addEventListener("click", function(event) {
//     let target = event.targrt



//     if (event.target.className === "edit") {

//         let result = prompt("введите имя");

//         event.target.previousElementSibling.value = result;
//         // localStorage.setItem(`${this.result}`, `${result}`);

//     }

//     if (event.target.className === "delete") {

//         let res = confirm("вы уверены ?");
//         if (res != true) {
//             return event.target
//         }
//         if (res == true) {
//             event.target.parentNode.remove();
//         }

//     }


// })


// *****************************************
let div = document.querySelectorAll('DIV');

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function(event) {

        let result = prompt("введите имя");


        event.target.previousElementSibling.value = result;


        if (!localStorage.i) {
            localStorage.setItem(`${i}`, `${result}`)
        } else {
            localStorage.value = result;
        }
    })
}