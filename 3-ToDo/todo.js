var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
 
var todos = [
    'Fazer Café', 
    'Estudar Javascript', 
    'Entrar na Comunidade da Rocketseat'
];

function renderToDos() {
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderToDos()