const emailLabel = document.querySelector("span");
if (emailLabel !== null) {
    // emailLabel.style.borderBottom = "1px solid red";
    // emailLabel.style.color = "red";

    // const textNode = document.createTextNode("Hello, World!");
    // emailLabel.innerHTML = "";
    // emailLabel.remove();
    // emailLabel.append(textNode);
}

const container = document.querySelector('#container');

while (container.firstChild) {
    // console.log("Removed item", container.firstChild);
    container.removeChild(container.firstChild);
}

const input = document.querySelectorAll("input")[0];

input.addEventListener("focus", function(event) {
   console.log("focus", event.target.value);
}, { once: true });

input.addEventListener("blur", function(event) {
    console.log("blur", event.target.value);
});

input.addEventListener("change", function(event) {
    console.log("change", event.target.value);
});

input.addEventListener("input", function(event) {
    console.log("input", event.target.value);
});

input.addEventListener("copy", function(event) {
    console.log("copy", event.target.value);
});

input.addEventListener("paste", function(event) {
    console.log("paste", event.target.value);
});

const form = document.querySelector(".login-form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("submit");

        // const result = {};
        // for (const element of form.elements) {
        //     console.log(element instanceof HTMLInputElement);
        //     console.log(element.tagName === "INPUT");
        //
        //     if (element instanceof HTMLInputElement) {
        //         result[element.name] = element.value;
        //     }
        // }

        // const result = Array.from(form.elements)
        //     .filter(function(element) {
        //         return element instanceof HTMLInputElement;
        //     })
        //     .reduce(function(acc, element) {
        //         acc[element.name] = element.value;
        //         return acc;
        //     }, {});

        // const result = Array.from(form.elements)
        //     .filter(element => element instanceof HTMLInputElement)
        //     .reduce((acc, element) => {
        //         acc[element.name] = element.value;
        //         return acc;
        //     }, {});
        //
        // console.log(result);
    })
}

// document.addEventListener("keypress", function(event) {
//     console.log("keypress", event);
// })
//
// document.addEventListener("keydown", function(event) {
//     console.log("keydown", event);
// })
//
// document.addEventListener("keyup", function(event) {
//     console.log("keyup", event);
// })

const formContainer = document.querySelector(".login-form");

formContainer.addEventListener("keypress", (event) => {
    console.log("keypress", event);
});

const mouseDiv = document.querySelector(".blue");

function addEvent(element, eventName) {
    element.addEventListener(eventName, function (event) {
        console.log(eventName, event.target.className);
        // console.count(eventName);
    })
}

const mouseEvents = [
    "mouseenter",
    "mouseleave",
    // "mousemove",
    // "mousedown",
    // "mouseup",
    // "click",
    "mouseover",
    "mouseout"
];

mouseEvents.forEach(function(eventName) {
    addEvent(mouseDiv, eventName);
});

window.addEventListener("resize", function() {
    console.log("resize")
})