var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
 
var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderToDos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir');
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderToDos()

function addTodo() {
    var todoText = inputElement.value;
    inputElement.value = '';

    todos.push(todoText);

    renderToDos();
    saveToStorage()
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderToDos();
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos));
}