define(["text!../templates/todo.html"], function (todoTemplate) {
  var addTodo = function (text) {
    var todoElement = document.createElement("div");
    todoElement.innerHTML = todoTemplate;
    todoElement.querySelector(".todo-text").innerText = text;
    document.getElementById("todo-list").appendChild(todoElement);
  };

  var start = function () {
    document
      .getElementById("todo-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        var text = document.getElementById("todo-input").value;
        addTodo(text);
        document.getElementById("todo-input").value = "";
      });
  };

  return {
    start: start,
  };
});
