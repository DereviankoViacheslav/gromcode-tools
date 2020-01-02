import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, creatTask } from './tasksGateway.js';

function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;
  if (!text) return;
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  creatTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
    taskTitleInputElem.value = '';
  });
}

;
export { onCreateTask };