let addbutton = document.getElementById('addbtn');
let todocontainer = document.getElementById('todocontainer');
let input = document.getElementById('input');

addbutton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph.styling');
    paragraph.innerText = input.value;
    todocontainer.appendChild(paragraph);
    input.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line through';
    })

    paragraph.addEventListener('dbclick', function(){
        todocontainer.removeChild(paragraph);
    })
});