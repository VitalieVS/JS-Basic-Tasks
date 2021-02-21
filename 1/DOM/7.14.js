const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.querySelector("button");

const removeBtn = () => {
    btn.addEventListener("click", () => {
        parent.removeChild(child);
    })
};

//call remove bnt