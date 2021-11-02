const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-task");
const task = document.querySelector(".task");

function createLI() {
  const li = document.createElement("li");
  return li;
}

inputTask.addEventListener("keypress", function (e) {
  if (e.keyColde === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

function clearInput() {
  inputTask.value = "";
  inputTask.focus();
}

function createEraseBtn(li) {
  li.innerText += " ";
  const btnErase = document.createElement("button");
  btnErase.innerText = "Erase";
  btnErase.setAttribute("class", "erase");
  btnErase.setAttribute("title", "Erase that task");
  li.appendChild(btnErase);
}

function createTask(inputText) {
  const li = createLI();
  li.innerText = inputText;
  task.appendChild(li);
  clearInput();
  createEraseBtn(li);
  saveTasks();
}

btnTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("erase")) {
    el.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  const liTasks = task.querySelectorAll("li");
  const taskList = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("erase", "");
    taskList.push(taskText);
  }
  const taskJSON = JSON.stringify(taskList);
  localStorage.setItem("tasks", taskJSON);
}

function addSavedTasks() {
  const task = localStorage.getItem("tasks");
  const taskList = JSON.parse(task);

  for (let task of taskList) {
    createTask(task);
  }
}

addSavedTasks();
