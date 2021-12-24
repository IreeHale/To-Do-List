//create variable connected to the class items in the index file
let input = document.getElementById("search");
let add = document.getElementById("add");
let container = document.getElementById("container2");
//create add btn functionality to add to do items
add.addEventListener("click", function addToContainer(){
    let p = document.createElement('p');
    p.innerText = input.value;
    container.appendChild(p);
});
//create line through functionality for the todo when clicked
//when you want to delete something you dble click it to remove it