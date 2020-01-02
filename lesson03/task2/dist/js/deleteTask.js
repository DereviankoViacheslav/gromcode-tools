import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { getTasksList, deleteTask } from './tasksGateway.js';

function onDeleteTask(event) {
  var isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;
  var taskId = event.target.parentNode.firstElementChild.dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
}

;
export { onDeleteTask };