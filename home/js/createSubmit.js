function createSubmit(){
    let submit = document.createElement('button');
    let form =document.querySelector('form');
    submit.className = "submit";
    submit.innerHTML = "Enter";
    submit.type = "submit";
    submit.style.width = "200px";
    submit.style.height = "50px";
    submit.style.marginLeft = "125px";
    submit.style.marginTop = "30px";
    submit.style.backgroundColor ="yellow";
    submit.style.fontSize = "2em";
    
    form.appendChild(submit);
}