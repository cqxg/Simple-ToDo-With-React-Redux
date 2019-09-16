import { ADD_TASK, REMOVE_TASK } from '../../constants';

export const addTast = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});


export const removeTask = id => ({
  type: REMOVE_TASK,
  id
})