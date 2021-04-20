function createInput() {
    let divWrapperInput = document.createElement('div');
    divWrapperInput.style.width = "400px";
    divWrapperInput.style.border = "2px solid black";
    divWrapperInput.style.height = "50px";
    divWrapperInput.style.marginTop = "20px";
    divWrapperInput.style.marginLeft = "20px";

    divWrapperInput.style.backgroundColor = "#20B2AA";
    divWrapperInput.style.display = "flex";
    divWrapperInput.style.justifyContent = "space-around";
    divWrapperInput.style.alignItems = "center";

    let input = document.createElement('input');
    input.style.height = "20px";
    input.value = "name";


    let buttonEdit = document.createElement('button');
    buttonEdit.type = "button";
    buttonEdit.className = "edit";
    buttonEdit.style.backgroundColor = "#4682B4";
    buttonEdit.style.width = "75px";
    buttonEdit.style.height = "25px";
    buttonEdit.innerHTML = "Edit";

    let buttonDelete = document.createElement('button');
    buttonDelete.type = "button";
    buttonDelete.className = "delete";
    buttonDelete.style.backgroundColor = "#4682B4";
    buttonDelete.style.width = "75px";
    buttonDelete.style.height = "25px";
    buttonDelete.innerHTML = "Delete";

    let form = document.querySelector('form');
    form.appendChild(divWrapperInput);
    divWrapperInput.appendChild(input);
    divWrapperInput.appendChild(buttonEdit);
    divWrapperInput.appendChild(buttonDelete);
    return divWrapperInput;
}