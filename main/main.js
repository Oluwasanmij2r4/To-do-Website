const input = document.querySelector("input");
const addTask = document.querySelector(".plus");
const taskSec = document.querySelector(".task_section");
const taskCount = document.querySelector(".left_text");
// const clear = document.querySelector(".right_text")
let taskNumber = 0;

addTask.addEventListener("click", () => {
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

document.getElementById("right_text").addEventListener("click", () => {
  const allTasks = taskSec.querySelectorAll(".task_style");

  allTasks.forEach((task) => {
    const icon = task.querySelector(".fa-check-circle");

    if (icon) {
      task.remove();
    }
  });

  if (taskNumber < 0) taskNumber = 0;

  taskCount.textContent = `${taskNumber} item${taskNumber > 1 ? "s" : ""}`;

  // if (taskNumber === 0) {
  //   taskSec.textContent = "No tasks left";
  // }
});

document.getElementById("light_image").addEventListener("click", () => {
  document.querySelector(".hero_img").classList.add("active");
});
document.getElementById("dark_image").addEventListener("click", () => {
  document.querySelector(".hero_img").classList.remove("active");
});

document.getElementById("light_image").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
document.getElementById("dark_image").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});
