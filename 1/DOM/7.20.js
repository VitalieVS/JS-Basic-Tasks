/*
<table style="border: 1px; width: 300px">
    <thead>
    <tr>
        <th colspan="4">Table</th>
    </tr>
    </thead>
    <tbody id="users">
    <tr>
        <td style="background: lightgray">Name</td><td style="background: lightgray"></td>
    </tr>
    </tbody>
</table>

<br>

<input id="inputAdd" type="text">
<input id="submitBtn" type="submit">

 */

const submitBtn = document.getElementById("submitBtn");
const inputAdd = document.getElementById("inputAdd");
const users = document.getElementById("users");

const add = () => {
  submitBtn.addEventListener("click", () => {
      if (inputAdd.value) {
          users.innerHTML += `<tr> <td> ${inputAdd.value}</td><td class="close"> X </td> </tr>`;
          inputAdd.value = "";
      }
      deleteHandler();
  })  
};

const deleteHandler = () => {
  const btns = document.querySelectorAll(".close");

  btns.forEach((btn, index) => {
      btns[index].addEventListener("click", () => {
          btn.parentElement.remove();
      })
  })
};

add();