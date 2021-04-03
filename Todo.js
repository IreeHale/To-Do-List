let addBtn = document.getElementById("add");
let input = document.getElementById("search");
let list = document.getElementById("list");

// this is for creating the add button feature
addBtn = document.addEventListener('click', function newElement(){
    let li = document.createElement("li");
    let input = document.getElementById("search").value;
    let i = document.createTextNode(input);
    li.appendChild(i);
    if(input === ' '){
        alert("You must have something to do !");
    }else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("search").value = "";
});