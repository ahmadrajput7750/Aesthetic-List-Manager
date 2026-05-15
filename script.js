let addButton = document.getElementById("addButton");
let itemAppender = document.getElementById("list");
let input = document.getElementById("itemInput");
let itemCounter = 0;
let totalItems = document.getElementById("total");

addButton.addEventListener("click", function () {
    if (input.value.trim() === "" || input.value === null || input.value === undefined || input.value === " ") {
        alert("Please Enter An Item Name First.");
        return;
    }
    let newItem = document.createElement("li");
    newItem.textContent = input.value;
    itemAppender.append(newItem);
    if (itemAppender) {
        itemCounter++;
        totalItems.textContent = `Total Items: ${itemCounter}`;
    }

    let divInsideLi = document.createElement("div");
    newItem.append(divInsideLi);

    input.value = null;

    // Add Edit button to each item
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    divInsideLi.append(editButton);

    // Add Delete button to each item
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    divInsideLi.append(deleteButton);

    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.textContent = "✓";
    divInsideLi.append(completeButton);

    function promptForNewValue() {
        let newValue = prompt("Enter New Item Name:", newItem.firstChild.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            return newItem.firstChild.textContent = newValue;
        }
        else if (newValue === null) {
            return;
        }
        else {
            alert("Invalid Input. Item Name Cannot Be Empty.");
            promptForNewValue();
        }
    }

    editButton.addEventListener("click", function () {
        promptForNewValue();
    });

    deleteButton.addEventListener("click", function () {
        if (confirm("Are You Sure You Want To Delete This Item?")) {
            newItem.remove();
            itemCounter--;
            totalItems.textContent = `Total Items: ${itemCounter}`;
        }
    });

    completeButton.addEventListener("click", function () {
        completeButton.classList.toggle("completed");
        completeButton.textContent = completeButton.classList.contains("completed") ? "✓ Completed" : "✓";
    });
});