const input = document.querySelector("input");
const addTask = document.querySelector(".plus");
const taskSec = document.querySelector(".task_section");
const taskCount = document.querySelector(".left_text");
let taskNumber = 0;

addTask.addEventListener("click", () => {
  //   taskSec.textContent = "";
  const inputValue = input.value;
  input.value = "";

  if (!inputValue) {
    alert("Please enter a task.");
    return;
  }

  if (taskNumber === 0) {
    taskSec.textContent = "";
  }

  const task = document.createElement("div");
  const taskText = document.createElement("p");
  const newIcon = document.createElement("i");

  newIcon.classList.add("icon", "fa-regular", "fa-circle");

  task.classList.add("task_style");
  taskText.classList.add("text_style");

  task.appendChild(taskText);
  task.appendChild(newIcon);
  taskText.textContent = inputValue;

  taskSec.appendChild(task);
  taskNumber++;
  taskCount.textContent = `${taskNumber} item${taskNumber > 1 ? "s" : ""}`;

  newIcon.addEventListener("click", () => {
    if (newIcon.classList.contains("fa-circle")) {
      newIcon.classList.replace("fa-circle", "fa-check-circle");
      newIcon.classList.add("active");
      taskText.classList.add("active");
      taskNumber--;
    } else {
      newIcon.classList.replace("fa-check-circle", "fa-circle");
      newIcon.classList.remove("active");
      taskText.classList.remove("active");
      taskNumber++;
    }
    taskCount.textContent = `${taskNumber} item${taskNumber > 1 ? "s" : ""}`;
  });
});
