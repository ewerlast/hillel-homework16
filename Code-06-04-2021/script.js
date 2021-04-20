for (let i = 0; i < 3; i++) {
    const textElement = new TextElement(i,{ defaultValue: "Hello, World"});
    document.body.appendChild(textElement.render());
}

// localStorage
// sessionStorage

// const data = [
//     { id: 1, name: "text" },
//     { id: 2, name: "input" },
//     { id: 3, name: "button" },
// ];

// sessionStorage.setItem("data", JSON.stringify(data));

// const d = loadData();
// console.log(d, typeof d);
//
// function loadData() {
//     try {
//         const json = sessionStorage.getItem("data");
//         const arr = JSON.parse(json);
//
//         return arr;
//     } catch (err) {
//         console.error("Error!", err);
//         return [];
//     }
// }