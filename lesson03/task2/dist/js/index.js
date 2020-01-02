import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
document.addEventListener('DOMContentLoaded', function () {
  getTasksList().then(function (tasksList) {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

function onStorageChange(event) {
  if (event.key === 'tasksList') renderTasks();
}

;
window.addEventListener('storage', onStorageChange);