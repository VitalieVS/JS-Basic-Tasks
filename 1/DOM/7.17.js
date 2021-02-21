const elem = document.getElementById("elem");
// <div id="elem" style="width: 10px; height: 10px; background: purple;"></div>
elem.addEventListener("click", () => {
    console.log(elem.style.width);
    console.log(elem.style.height);

    elem.style.width = (parseInt(elem.style.width) * 2).toString() + "px";
    elem.style.height = (parseInt(elem.style.height) * 2).toString() + "px";
});