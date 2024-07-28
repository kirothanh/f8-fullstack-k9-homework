var todoWrap = document.querySelector(".todo-wrapper");

var formTodo = document.querySelector(".todo-form");
var inputTodo = formTodo.querySelector(".todo-input");

formTodo.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputTodo.value.length > 0) {
    var todoHTML = `
      <div class="todo">
        <p class="todoVal">${inputTodo.value}</p>
        <div class="icon-wrap">
          <i class="fa-solid fa-pen-to-square penIcon"></i>
          <i class="fa-solid fa-trash trashIcon"></i>
        </div>
      </div>
    `;

    todoWrap.insertAdjacentHTML("beforeend", todoHTML);

    inputTodo.value = "";
  }
});

todoWrap.addEventListener("click", function (e) {
  if (e.target.classList.contains("trashIcon")) {
    var todo = e.target.closest(".todo");
    todo.remove();
  }
});

todoWrap.addEventListener("click", function (e) {
  if (e.target.classList.contains("penIcon")) {
    var todo = e.target.closest(".todo");
    var todoContent = todo.querySelector("p").textContent;

    var editFormHTML = `
      <form class="todo-form">
        <input type="text" class="todo-input" value="${todoContent}">
        <button type="submit" class="todo-btn">Add Task</button>
      </form>
    `;

    var editFormDiv = document.createElement("div");
    editFormDiv.innerHTML = editFormHTML;

    var newEditForm = editFormDiv.firstElementChild;
    todo.replaceWith(newEditForm);

    newEditForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var editInput = newEditForm.querySelector(".todo-input");
      if (editInput.value.length > 0) {
        var updatedContent = editInput.value;

        var updatedTodoHTML = `
          <div class="todo">
            <p class="todoVal">${updatedContent}</p>
            <div class="icon-wrap">
              <i class="fa-solid fa-pen-to-square penIcon"></i>
              <i class="fa-solid fa-trash trashIcon"></i>
            </div>
          </div>
        `;

        var updatedTodoDiv = document.createElement("div");
        updatedTodoDiv.innerHTML = updatedTodoHTML;

        newEditForm.replaceWith(updatedTodoDiv.firstElementChild);
      }
    });
  }
});

todoWrap.addEventListener("click", function(e) {
  if(e.target.classList.contains("todoVal")) {
    var todoContent = e.target;
    if(todoContent.style.textDecoration === "line-through") {
      todoContent.style.textDecoration = "none";
      todoContent.style.color = "#fff";
    } else {
      todoContent.style.textDecoration = "line-through";
      todoContent.style.color = "#c5adff";
    }
  }
})