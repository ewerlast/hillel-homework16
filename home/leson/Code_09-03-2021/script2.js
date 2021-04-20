function createInputField(title, type) {
    const container = document.createElement("div");
    container.className = "input-field";

    const span = document.createElement("span");
    span.innerText = title;

    const input = document.createElement("input");
    input.type = type;
    input.className = "validate";

    container.appendChild(span);
    container.appendChild(input);

    return { container, input };
}

function createButton(text) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "btn";
    button.innerText = text;

    return button;
}

function createForm() {
    const form = document.createElement("form");
    form.className = "login-form";

    const emailElements = createInputField("Email", "text");
    const passwordElements = createInputField("Password", "password");

    const togglePasswordButton = createButton("Show password");
    const loginButton = createButton("Login");

    togglePasswordButton.addEventListener("click", function() {
        togglePasswordButton.innerText = passwordElements.input.type === "password" ? "hide password" : "show password";
        passwordElements.input.type = passwordElements.input.type === "password" ? "text" : "password";
    });

    loginButton.addEventListener("click", function() {
        const email = emailElements.input.value;
        const password = passwordElements.input.value;

        console.log(`Email: ${email}, password: ${password}`);
    });

    form.appendChild(emailElements.container);
    form.appendChild(passwordElements.container);
    form.appendChild(togglePasswordButton);
    form.appendChild(loginButton);

    return form;
}

const form = createForm();
document.body.appendChild(form);