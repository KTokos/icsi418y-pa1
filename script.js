// Get DOM elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const currentTasks = [];

const task = {
    name: "Finish personal project",
    priority: "high",
    completed: false
};

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    // Check if taskName is empty
    if (taskName == "") {
        // Return and prevent no-name tasks
        return;
    }

    // Set task object values
    task.name = taskName;
    task.priority = taskPriority;

    // Add task to currentTask list
    currentTasks.push(task);

    // Log current tasks for testing
    //console.log(currentTasks);

    // Create task element
    taskList.insertAdjacentHTML(
        "beforeend",
        `<div class="task-list-element">
            <p>${task.name}</p>
            <p>${task.priority}</p>
            <p>${task.completed.valueOf()}</p>
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

        // Remove the div parent of the button
        const buttonParent = button.parentElement;
        buttonParent.remove();
    }
})