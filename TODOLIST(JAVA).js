// script.js
document.getElementById('addTodoBtn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('할 일을 입력하세요!');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = ''; // 입력 필드 초기화
}