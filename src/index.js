document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newTaskDescription = event.target.querySelector("#new-task-description").value;
    let newTaskItem = document.createElement("li");
    newTaskItem.innerText = newTaskDescription;

    taskList.appendChild(newTaskItem);

    event.target.reset();
  });
});
