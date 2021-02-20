const table = document.createElement("table");

for (let i = 1; i < 9; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j < 9; j++) {
        const td = document.createElement("td");
        !(i % 2 === j % 2) ? td.className = "black" : 0;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);