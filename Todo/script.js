let sonuc;
let todoList = [];
let editID;
let isEditTask = false;
const tastInput = document.querySelector("#txtNewTodoName");
const btnClear = document.querySelector("#btnClear");
const filters = document.querySelectorAll(".filters span");

if (localStorage.getItem("todoList")!== null){
    todoList =JSON.parse(localStorage.getItem("todoList"));
}

displayTasks("all");
function displayTasks(filter) {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";
    if(todoList.length == 0){
       ul.innerHTML="<p class='p-3 m-0'>Task list is empty</p>";
    }
    else{

        for(let todo of todoList) {

        let completed = todo.durum == "completed" ? "checked" : "";

            if(filter == todo.durum || filter == "all"){

            let li = `
                <li class="task list-group-item">
                    <div class="form-check">
                        <input type="checkbox" onclick="updateStatus(this)" id="${todo.id}" class="form-check-input">
                        <label for="${todo.id}" class="form-check-label">${todo.gorevAdi}</label>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </button>
                        <ul class="dropdown-menu">
                        <li><a onclick="deleteTask(${todo.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash" style="color:red;"></i> Delete</a></li>
                        <li><a onclick='editTask(${todo.id}, "${todo.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen-to-square style" style="color: blue;"></i> Edit</a></li>
                        
                        </ul>
                    </div>
                </li>
            `;
            ul.insertAdjacentHTML("beforeend", li);   
            }
              

         }
    }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function() {
    if(e.key =="Enter"){
        document.getElementById("btnAddNewTask").click();
    }

});

for(let span of filters){
    span.addEventListener("click", function(){
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTasks(span.id);
    });
}

/**   Todo Ekleme İşlemleri  */

function newTask(event) {            
    if(tastInput.value == ""){
        alert("Boş Geçilemez!");
    }
    else {
        if(!isEditTask){
            // ekleme 
            todoList.push({"id": todoList.length+1, "gorevAdi" : tastInput.value,"durum": "pending"});
        }
        else{
            // guncelleme
            for(let todo of todoList){
                if(todo.id == editID)
                {
                    todo.gorevAdi = tastInput.value;
                }
                isEditTask=false;
             }
        }
        tastInput.value ="";
        displayTasks(document.querySelector("span.active").id);
        localStorage.setItem("todoList",JSON.stringify(todoList));
    }                         
    event.preventDefault();
}

/**   Todo Silme İşlemleri  */

function deleteTask(id){
        let deletedID;    
        
      deletedID = todoList.findIndex(todo => todo.id == id);

        todoList.splice(deletedID,1);
        displayTasks(document.querySelector("span.active").id);
        localStorage.setItem("todoList",JSON.stringify(todoList));
}

/* Todo Güncelleme İşlemleri */

function editTask(taskID,taskName){
    editID=taskID;
    isEditTask=true;
    tastInput.value=taskName;
    tastInput.focus();
    tastInput.classList.add("active");
}

/* Todoların Hepsini silme İşlemleri */

btnClear.addEventListener("click",function(){
    todoList.splice(0,todoList.length);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    displayTasks();
})

/* Checkbox durum kontrol etme */

function updateStatus(selectedTask){
    let label = selectedTask.nextElementSibling;
    let durum;
    if(selectedTask.checked){
        label.classList.add("checked");
        durum="completed";
    }else{
        label.classList.remove("checked");
        durum="pending";
    }

    for(let todo of todoList){
        if(todo.id == selectedTask.id){
            todo.durum = durum;
        }

    }
    
    localStorage.setItem("todoList",JSON.stringify(todoList));
}
