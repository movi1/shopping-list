
//cREATE A SHOPPING LIST

//User inputs items that they want

//Check id the item is already on the list if not add message saying it is added

//if it is already there say item is already in the list



function addItem() {
    //get the element <input type="text" id="item"> in html and show its value
    let newItem = document.getElementById("item").value
    
    //display in console the variable value of newItem
    console.log(newItem)

    //get the element <ul id="list">
    const ul = document.getElementById("list");

    //
    console.log(ul)

    //creating a new blank li in HTML file (no text text inside)
    let li = document.createElement("li");

    // attached the child (the item text) to the li 
    li.appendChild(document.createTextNode(newItem));
   // 
    ul.appendChild(li);

    // if (item.includes(document.getElementById("item").value)){
    //     alert("Item already there")

    // } else if (document.getElementById("item").value == "") {
    //     alert("Please add an item")
    // } else {
    //     list.push(newItem)
    //     input.value = ""
    //     console.log(list)
    // }

}





