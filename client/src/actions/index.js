import actions from "./actions";

// -1 => default to active category
export function addTodo(text, category = -1) {
  return {
    type: actions.ADD_TODO,
    text,
    category
  }
}

export function removeTodo(id) {
  return {
    type: actions.REMOVE_TODO,
    id
  }
}

export function toggleTodo(id) {
  return {
    type: actions.TOGGLE_TODO,
    id
  }
}

export function addCategory(title) {
  return {
    type: actions.ADD_CATEGORY,
    title
  }
}

export function removeCategory(id) {
  return {
    type: actions.removeCategory,
    id
  }
}

export function addPomo(id /* of todo item */) {
  return {
    type: actions.ADD_POMO,
    id
  }
}

export function removePomo(id /* of todo item */) {
  return {
    type: actions.REMOVE_POMO,
    id
  }
}

export function setActiveTodo(id /* of todo item */) {
  return {
    type: actions.SET_ACTIVE_TODO,
    id
  }
}

export function clearActiveTodo() {
  return {
    type: actions.CLEAR_ACTIVE_TODO
  }
}

export function startTimer() {
  return {
    type: actions.START_TIMER
  }
}

export function stopTimer() {
  return {
    type: actions.STOP_TIMER
  }
}

export function setTimer(time /* in seconds */) {
  return {
    type: actions.SET_TIMER,
    time
  }
}