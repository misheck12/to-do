import { addTask, removeTask } from '../__mocks__/crud.js';
import { updateStorage } from '../__mocks__/storage.js';

test('addTask should add a task to the storage', () => {
  const tasks = addTask(1, false, 'task');
  expect(tasks).toHaveLength(1);
  updateStorage([]);
});

test('removeTask should remove a task from the storage', () => {
  addTask(1, false, 'task');
  const task = removeTask(1);
  expect(task).toHaveLength(0);
  updateStorage([]);
});
