//My Shopping list 
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const shoppingListBody = document.getElementById('shoppingListBody');
const clearListButton = document.getElementById('clearListButton');

//Funtion for adding a new item to the list 
function addItem() {
    const itemText = itemInput.value.trim();

    //Check if the input is empty
    if (itemText === '') {
        alert('Please enter an item.');
        return;
    }

    //Create a new row for the item
    const newRow = document.createElement('tr');

    //Create a cell for the checkbox
    const checkCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkCell.appendChild(checkbox);

    //Create a cell for the item text
    const textCell = document.createElement('td');
    textCell.textContent = itemText;

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            textCell.classList.add('checked');
        } else {
            textCell.classList.remove('checked');
        }
    });

    //A cell for the delete button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });
    actionCell.appendChild(deleteButton);
    
    //Append cells to the row
    newRow.appendChild(checkCell);
    newRow.appendChild(textCell);
    newRow.appendChild(actionCell);

    //Append the row to the table body
    shoppingListBody.appendChild(newRow);

    //Clear the input field
    itemInput.value = '';
}

//Function to clear the entire list
function clearList() {
    shoppingListBody.innerHTML = '';
}

//Event listeners for buttons
addItemButton.addEventListener('click', addItem);
clearListButton.addEventListener('click', clearList);

//Allow pressing Enter key to add item
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});     

