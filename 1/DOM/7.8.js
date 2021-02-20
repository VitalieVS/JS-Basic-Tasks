/*
<label for="myInput"></label><input id="myInput" type="text">
<input id="submit" type="submit">
 */

const orderedList = document.querySelector("ol");
const text = document.getElementById("myInput");
const submit = document.getElementById("submit");

const resetInput = () => {
    submit.toggleAttribute("disabled");
    text.value = "";
};

const inputHandler = () => {
    text.addEventListener("input", () => {
        submit.toggleAttribute((!text.value) ? "disabled" : "disabled", false)
    })
};

const buttonHandler = () => {
    submit.addEventListener("click", () => {
        const li = document.createElement("li");
        li.innerText = text.value;
        li.addEventListener("click", ev => {
            alert(ev.target.innerText);
        });
        orderedList.appendChild(li);
        resetInput();
    })
};

document.addEventListener('DOMContentLoaded', () => {
    resetInput();
    buttonHandler();
    inputHandler();
});
