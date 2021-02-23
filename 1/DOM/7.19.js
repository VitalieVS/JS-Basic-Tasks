/*
<div id="parent-left" style="width: 80px; height: 30px;border: 1px solid black">
    <div id="child" draggable="true">Child Elem</div>
</div>
<br>

<div id="parent-right" style="width: 80px; height: 30px;border: 1px solid black"></div>
 */

const parent_left = document.getElementById("parent-left");
const child = document.getElementById("child");
const parent_right = document.getElementById("parent-right");

const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
};

const allowDrop = (e) => {
    e.preventDefault();
};

const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
};

parent_left.ondragover = allowDrop;
child.ondragstart = drag;
parent_left.ondrop = drop;
parent_right.ondragover = allowDrop;
parent_right.ondrop = drop;

