const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

function updateCounter() {
    const totalTasks = taskList.children.length;
    counter.textContent = `Всего задач: ${totalTasks}`;
}

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            li.remove(); 
            updateCounter(); 
        });

        li.append(deleteBtn);

        taskList.append(li);

        taskInput.value = "";

        updateCounter();
    } else {
        alert("Пожалуйста, введите текст задачи!");
    }
});