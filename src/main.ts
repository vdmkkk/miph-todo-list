const todoColumn = document.getElementById("todo");
const inProgressColumn = document.getElementById("in-progress");
const reviewColumn = document.getElementById("review");
const doneColumn = document.getElementById("done");

const addBtn = document.getElementById("add-task");

const handleClickButton = () => {
  console.log("hello world");

  const taskElement = document.createElement("div");
  const input = document.createElement("input");
  taskElement.appendChild(input);
  taskElement.classList.add("task");
  // 1) наполнить этот элемент (input, select)
  // 2) Прикрепляем taskElement к колонке
  // 3) на селект повесить слушатель, который будет перемещать taskElement между колонками
};

addBtn?.addEventListener("click", handleClickButton);
