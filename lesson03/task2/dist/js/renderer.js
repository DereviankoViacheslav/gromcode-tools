import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { getItem } from './storage.js';
var listElem = document.querySelector('.list');

function createCheckbox(_ref) {
  var done = _ref.done,
      id = _ref.id;
  var checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
}

function createListItem(_ref2) {
  var text = _ref2.text,
      done = _ref2.done,
      id = _ref2.id;
  var listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item');
  if (done) listItemElem.classList.add('list-item_done');
  var textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  var checkboxElem = createCheckbox({
    done: done,
    id: id
  });
  var deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
}

;

function renderTasks() {
  var tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  var tasksElems = tasksList.sort(function (a, b) {
    return new Date(b.createDate) - new Date(a.createDate);
  }).sort(function (a, b) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }).sort(function (a, b) {
    return a.done - b.done;
  }).map(createListItem);
  listElem.append.apply(listElem, _toConsumableArray(tasksElems));
}

;
export { renderTasks };