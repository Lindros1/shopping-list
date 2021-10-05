window.onload = function () {
    initShoppingList();
}

function initShoppingList() {
    let form = document.getElementById("item-form")
    console.log(form);
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    console.log("Event: ", event);
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");

    function getRandomInt(0,number2) {
        return undefined;
    }

    let id = getRandomInt(0, 10000000);

    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml)

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {

    });
}

function createListItemHtml(itemName, itemAmount, id) {
    return `<li id="item${id}">
                ${itemName} - ${itemAmount}
                <button id="button${id}">Delete Item</button>
                </li>
    
 ;
    }

function removeListItem(id) {
    let listItem = docuument.getElementById("item"+ id);
    listItem.parentNode
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The Maximum
}
`}
