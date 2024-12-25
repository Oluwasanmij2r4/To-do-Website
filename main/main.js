const input = document.querySelector("input");
const addTask = document.querySelector(".plus");
const taskSec = document.querySelector(".task_section");
const taskCount = document.querySelector(".left_text");
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

function handleTasks(action) {
  const allTasks = taskSec.querySelectorAll(".task_style");

  allTasks.forEach((task) => {
    const icon = task.querySelector(".fa-check-circle");
    const allIcon = task.querySelector(".icon")

    if (action === "all" && allIcon){
      task.style.display = "";
    } else if (action === "remove" && icon) {
      task.remove();
    } else if (action === "filter") {
      if (icon && icon.classList.contains("fa-check-circle")) {
        task.style.display = "none";
      } else {
        task.style.display = "";
      }
    } else if (action === "show-completed"){
      if(icon){
        task.style.display = "";
      } else {
        task.style.display = "none"
      }
    }
  });
}

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.classList.remove("active-button"));

  activeButton.classList.add("active-button");
}


document.getElementById("right_text").addEventListener("click", () => {
  handleTasks("remove");
});

document.getElementById("active_task").addEventListener("click", (e) => {
  handleTasks("filter");

  setActiveButton(e.currentTarget);
});

document.getElementById("all").addEventListener("click", (e) => {
  handleTasks("all");

  setActiveButton(e.currentTarget);
});

document.getElementById("comp").addEventListener("click", (e) => {
  handleTasks("show-completed");

  setActiveButton(e.currentTarget);
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
