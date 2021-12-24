//create variable connected to the class items in the index file
let input = document.getElementById("search");
let add = document.getElementById("add");
let container = document.getElementsByClassName("container2");
//create add btn functionality to add to do items
add.addEventListener("click", function(){
    let paragraph = document.CreateElement('p');
    console.log(input.value);
});
//create line through functionality for the todo when clicked
//when you want to delete something you dble click it to remove it