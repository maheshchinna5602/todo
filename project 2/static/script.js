document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('.todo-list');

    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('toggle-btn') || event.target.classList.contains('delete-btn')) {
            event.target.closest('form').submit();
        }
    });
});
