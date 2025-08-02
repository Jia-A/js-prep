const todoForm = document.querySelector('.todo-form')
const input = document.querySelector('.todo-input');
const submitButton = document.querySelector('.submit-button');
const todoList = document.querySelector('.todo-list');
const todoItems = document.querySelector('.todo-items');
let editMode= false;
let editItem = null

const addTodoItem = (todoItemText) => {
        const todoItem = document.createElement('li');
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        todoItem.innerText = todoItemText;
        editButton.innerText = 'Edit';
        deleteButton.innerText = 'Delete';
        todoItem.appendChild(editButton)
        todoItem.appendChild(deleteButton)
        todoItems.appendChild(todoItem);
     }

todoForm.addEventListener('submit', (event)=> {
     event.preventDefault();
     const inputText = input.value.trim();
     if(inputText === '') {
        alert('Please enter a todo item.');
        return;
     }
     else {
        if(editMode) {
            editItem.firstChild.textContent = inputText
            submitButton.innerText = 'Add todo'
            editMode = false;
            editItem = null
        }
        else {
            addTodoItem(inputText);
        }
        
        input.value = '';
     }
})

todoList.addEventListener('click', (event)=> {
    const target = event.target;
    if(target.tagName === 'BUTTON'){
         const todoItem = target.parentNode
        if(target.innerText === "Delete"){
           
            todoItem.remove() //in-build fucntion for removing stuff
        }
        else if(target.innerText === "Edit"){
            editMode=true
            editItem = todoItem
            submitButton.innerText = "Edit todo"
            input.value = todoItem.firstChild.textContent
            input.focus()
        }
        
    }
}) 