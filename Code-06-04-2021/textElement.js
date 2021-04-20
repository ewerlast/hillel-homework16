const textState = Object.freeze({
    edit: "edit",
    display: "display"
})

// const STORAGE_KEY = "text-element-data";

class TextElement {
    #button; // Button class
    #text; // element p
    #input; // element input
    #state; // edit || display
    #storageKey;

    constructor(index, props) {
        this.#text = document.createElement("p");
        this.#input = document.createElement("input");

        this.#button = new Button({
            className: "btn",
            text: "Edit",
            onClick: this.onClick.bind(this)
            // onClick: () => this.onClick()
        });

        this.#storageKey = `text-element-data-${index}`;

        let value = this.loadData();
        if (value === null || value === "") {
            value = props?.defaultValue ?? "";
        }

        this.#text.innerText = value;
        this.#input.value = value;

        this.changeState(textState.display);
    }

    onClick() {
        switch (this.#state) {
            case textState.display: {
                this.changeState(textState.edit);
                break;
            }
            case textState.edit: {
                this.changeState(textState.display);
                break;
            }
            default:
                throw new Error(`Invalid state: ${this.#state}`);
        }
    }

    changeState(nextState) {
        this.#state = nextState;

        switch (this.#state) {
            case textState.display: {
                this.#input.hidden = true;
                this.#text.hidden = false;

                const value = this.#input.value;
                this.#text.innerText = value;
                this.saveData(value);

                this.#button.setText("Edit");
                break;
            }
            case textState.edit: {
                this.#input.hidden = false;
                this.#text.hidden = true;
                this.#button.setText("Save");
                break;
            }
            default:
                throw new Error(`Invalid state: ${this.#state}`);
        }
    }

    saveData(value) {
        localStorage.setItem(this.#storageKey, value);
    }

    loadData() {
        return localStorage.getItem(this.#storageKey);
    }

    render() {
        const container = document.createElement("div");
        container.className = "wrapper";

        container.appendChild(this.#text);
        container.appendChild(this.#input);
        container.appendChild(this.#button.render());

        return container;
    }
}