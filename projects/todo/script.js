let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    saveTasks();

    renderTasks();

    taskInput.value = "";
}

function removeTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    renderTasks();
}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    if (tasks.length === 0) {

    taskList.innerHTML =
        "<li>No tasks yet</li>";

    return;
}

    document.getElementById("taskCount").innerText =
        `Tasks: ${tasks.length}`;
    
    tasks.forEach((task, index) => {

        let li = document.createElement("li");

    li.innerHTML = `
    <span class="task-text">
        ${task}
    </span>

    <button onclick="removeTask(${index})">
        Delete
    </button>
`;

li.querySelector(".task-text").addEventListener("click", function () {
    this.classList.toggle("completed");
});

        taskList.appendChild(li);
    });
}

function clearAllTasks() {

    tasks = [];

    saveTasks();

    renderTasks();
}

function toggleTask(element) {
    element.classList.toggle("completed");
}