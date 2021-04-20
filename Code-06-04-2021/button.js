class Button {
    #button;

    // { className, text }
    constructor(props) {
        this.#button = document.createElement("button");

        // this.#button.className = props === undefined ? "" : props.className || "";
        this.#button.className = props?.className ?? "";

        const text = props?.text ?? "";
        this.setText(text);

        const onClick = props?.onClick;
        if (onClick !== undefined) {
            this.#button.addEventListener("click", onClick);
        }
    }

    setText(text) {
        this.#button.innerText = text;
    }

    render() {
        return this.#button;
        // document.body.appendChild(this.#button);
    }
}