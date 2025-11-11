const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addbutton = document.getElementById("add-button");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");
const deleteAllButton = document.getElementById("deleteAll");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15)
  ).toString();
};

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const saveTolocalstorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const displayTodos = () => {
  todosBody.innerHTML = "";
  if (!todos.length) {
    todosBody.innerHTML = "<tr><td colspan = '4'> No Task Found</td></tr>";
    return;
  }
  todos.forEach((todo) => {
    todosBody.innerHTML += `
    <tr>
          <td>${todo.task}</td>
            <td>${todo.date || "NO date"}</td>
            <td>${todo.comleted ? "Completed" : "pending"}</td>
            <td>
                <button>Edit</button>
                <button>DO</button>
                <button onclick="deleteHandler()">Delete</button>
          </td>
    </tr> `;
  });
};

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    task,
    date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    saveTolocalstorage();
    displayTodos();
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
    showAlert("todo added sucssesfuly ", "success");
  } else {
    showAlert("Please enter a todo! ", "error");
  }
};

let deleteAllHandler = () => {
  if (todos.length) {
    todos = [];
    saveTolocalstorage();
    displayTodos();
    showAlert(" All todos cleared ", "success");
  } else {
    showAlert("No todos to clear", "error");
  }
};
const deleteHandler = () =>{ 
  console.log("object");

}

window.addEventListener("load", displayTodos);
addbutton.addEventListener("click", addHandler);
deleteAllButton.addEventListener("click", deleteAllHandler);
