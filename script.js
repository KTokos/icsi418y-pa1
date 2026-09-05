// Get DOM elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");
const completedTaskList = document.querySelector("#completed-task-list");

const currentTasks = [];
const completedTasks = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    // Check if taskName is empty
    if (taskName == "") {
        // Return and prevent no-name tasks
        return;
    }

    // Create task object
    const task = {
        id: Math.floor(Math.random() * 1000), // Number between 0 and 1000
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    // Add task to currentTask list
    currentTasks.push(task);

    // Create task element
    taskList.insertAdjacentHTML(
        "beforeend",
        `<div class="task-list-element" id="${task.id}">
            <p class="task-name">${task.name}</p>
            <p class="task-priority">${task.priority}</p>
            <p class="task-status">${task.completed.valueOf()}</p>
            <button id="complete-btn">Complete</button>
        </div>`
    );
})

// Listen to clicks on complete buttons
taskList.addEventListener('click', (event) => {
    // Check if the element that was clicked is a button
    if (event.target.tagName === 'BUTTON') {
        // Get button
        const button = event.target;

        // Get the parent and the task id
        const buttonParent = button.parentElement;
        const taskId = buttonParent.getAttribute("id");

        console.log(currentTasks);

        // Find the task in the current tasks list and update completion value
        const completedTask = currentTasks.find(obj => obj.id == taskId);

        console.log(completedTask);

        // Update the currentTasks array by removing the task
        const taskIndex = currentTasks.indexOf(completedTask);
        currentTasks.splice(taskIndex, 1);

        // Update the completion value
        completedTask.completed = true;

        // Add the task to the completed tasks array
        completedTasks.push(completedTask);

        // Remove the div parent of the button
        buttonParent.remove();

        // Create task element in completed-task-list
        completedTaskList.insertAdjacentHTML(
            "beforeend",
            `<div class="task-list-element" id="${completedTask.id}">
            <p class="task-name">${completedTask.name}</p>
            <p class="task-priority">${completedTask.priority}</p>
            <p class="task-status">${completedTask.completed.valueOf()}</p>
        </div>`
        );
    }
})