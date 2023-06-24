// todoForm
// todoInput
// button
// editForm
// editInput
// cancelEditButton
// searchInput
// raseButton
// filterSelect
// todoList

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const button = document.querySelector("#button");
const editForm = document.querySelector("#editForm");
const editInput = document.querySelector("#editInput");
const cancelEditButton = document.querySelector("#cancelEditButton");
const eraseButton = document.querySelector("#eraseButton");
const todoList = document.querySelector("#todoList");

let inputVelho;

todoForm.addEventListener("submit", (M) => {
  M.preventDefault();
  const valueOfInput = todoInput.value;
  if (valueOfInput) {
    saveInput(valueOfInput);
  }
});

const editFunc = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const attTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    if (todoTitle.innerText === inputVelho) {
      todoTitle.innerText = text;
    }
  });
};

const saveInput = (text) => {
  const addNaDiv = document.createElement("div");
  addNaDiv.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  addNaDiv.appendChild(todoTitle);

  const doneButton = document.createElement("button");
  doneButton.classList.add("finishTodo");
  doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  addNaDiv.appendChild(doneButton);

  const editButton = document.createElement("button");
  editButton.classList.add("editTodo");
  editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
  addNaDiv.appendChild(editButton);

  const deletButton = document.createElement("button");
  deletButton.classList.add("removeTodo");
  deletButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  addNaDiv.appendChild(deletButton);

  todoList.appendChild(addNaDiv);
};

document.addEventListener("click", (L) => {
  const targetG = L.target;
  const paizao = targetG.closest("div");
  let todoB;

  if (paizao && paizao.querySelector("h3")) {
    todoB = paizao.querySelector("h3").innerText;
  }

  if (targetG.classList.contains("finishTodo")) {
    paizao.classList.toggle("done");
  }

  if (targetG.classList.contains("editTodo")) {
    editFunc();

    editInput.value = todoB;
    inputVelho = todoB;
  }

  if (targetG.classList.contains("removeTodo")) {
    paizao.remove();
  }
});

cancelEditButton.addEventListener("click", (P) => {
  P.preventDefault();

  editFunc();
});

editForm.addEventListener("submit", (r) => {
  r.preventDefault();
  const editInputValue = editInput.value;
  if (editInputValue) {
    attTodo(editInputValue);
  }

  editFunc();
});
