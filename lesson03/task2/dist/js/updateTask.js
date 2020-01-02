import "core-js/modules/es.array.find";
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

function onToggleTask(event) {
  var isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;
  var taskId = event.target.dataset.id;
  var done = event.target.checked;
  var tasksList = getItem('tasksList');

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
}

;
export { onToggleTask };