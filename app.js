
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//EventListener

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("change", filterTodo);
todoInput.addEventListener("change",(event)=>{console.log(event)});
//Function

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    // console.log('Hello'); //This line is to check if the function is working or not

    // 3. Todo Div(For each todo's)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // 4. Create li

    const newTodo =document.createElement('li');
    //To check itds working
    newTodo.innerText = todoInput.value;
    // li tag ta te 1 ta class add korse to style with css
    newTodo.classList.add('todo-item');
    // Line 18 a j div ta create korsi oita te new list or todo add korchi through appendchild
    todoDiv.appendChild(newTodo);
    
    // Checked button

    const completedButton = document.createElement('button');
    // icon add korlam
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    //CSS r jonno class banailam
    completedButton.classList.add('complete-btn');
    // Div ta te a button tag ta append korlam
    todoDiv.appendChild(completedButton);

    // Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Appending the div(todoDiv) in to the ul
    todoList.appendChild(todoDiv);

    //Clear todo input
    todoInput.value = "";
}

function deleteCheck(e){
    console.log(e);
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        // todo.remove();
    }

    //Check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Options
function filterTodo(e) {
    console.log("Hello");
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }


//  The structure we want to achive

// 1. div(The main container)-> 2. ul(The list of todo's)->3. div(For each todo's)->4. li,button(for delete),button(for checked)

//  <div class="todo">
//      <li>The todo which we will add</li>
//      <button>Delete</button>
//      <button>Checked</button>
//  </div>

