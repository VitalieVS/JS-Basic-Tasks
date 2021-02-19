window.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        document.body.style.backgroundColor = "green";
    }, 3000);

    const orangeButton = document.getElementById("orangeButton");

    orangeButton.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
    });

    const currying = tag => text => `<${tag}>${text}</${tag}>`;
    const ol = document.getElementById("orderedList");
    let counter = 0;

    setInterval(() => {
        if (counter !== 20) {
            counter++;
            const li = currying("li");
            const liValue = li(`Element ${counter}`);
            ol.innerHTML += liValue;
        } else {
            clearInterval(this);
        }
    }, 2000);
});