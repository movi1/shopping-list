
//Create Shopping List
//User inputs items that they want
//Check id the item is already on the list if not add message saying it is added
//if it is already there say item is already in the list

//shoppingList (variable) = shopping list array [] 
const shoppingList = [];

// function to add items on the shopping list 
function addToShppingList() {

    // variable newItem = get the value from the html <input type="text" id="item">
    let newItem = document.getElementById("item").value

    //Check if item in variable (newItem) already exists in the array (shoppingList) and assign true or false
    let itemAlreadyExists = shoppingList.includes(newItem);

// if (newItem)is empty it will display an alert  saying "Please add an item"
    if (newItem == "") {
        alert("Please add an item")
        return
    }

    //if (itemAlreadyExists) it will display an alert saying "Item already there"
    if (itemAlreadyExists) {
        //if true show alert
        alert("Item already there")
    }
    //add item to list
    else {

        shoppingList.push(newItem);
        console.log(shoppingList)

        //ul html code here

        const ul = document.getElementById("list");
        console.log(ul)

        //creating a new blank li in HTML file (no text text inside)
        let li = document.createElement("li");

        // attached the child (the item text) to the li 
        li.appendChild(document.createTextNode(newItem));
        // 
        ul.appendChild(li);

        //reset user input
        newItem = ""

    }




}

