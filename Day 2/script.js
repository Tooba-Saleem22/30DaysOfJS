const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
    return;
  } else {
    // Create <li> element
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // ✅ Create delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.innerText = "❌";
    deleteBtn.classList.add("delete-btn");

    // ✅ Add delete button inside <li>
    li.appendChild(deleteBtn);

    // ✅ Add <li> to the list
    listContainer.appendChild(li);

    // ✅ Clear input
    inputBox.value = "";
  }
}

// ✅ Event delegation to delete task when ❌ is clicked
listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove(); // removes the <li>
  }
});
