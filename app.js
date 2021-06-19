// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listner
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

// functions
function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    // todo li
    const todoLi = document.createElement('li')
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
      // check trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      
    // append to list
    todoList.appendChild(todoDiv);
    // clear the input value
    todoInput.value="";    
}
function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === 'trash-btn')
    {
        const todo=item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    if(item.classList[0] === 'complete-btn')
    {
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value)
    {
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if(todo.classList.contains('completed'))
            {
                todo.style.display = "flex";
            }    
            else{
                todo.style.display = "none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains('completed'))
            {
                todo.style.display='flex';
            }    
            else{
                todo.style.display='none';
            }
            break;
    }

});
}