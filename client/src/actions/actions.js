const actions = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "FINISH_TODO",
  SET_TODO_ORDER: "SET_TODO_ORDER",
  ADD_CATEGORY: "ADD_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
  ADD_POMO: "ADD_POMO",  
  REMOVE_POMO: "REMOVE_POMO",
  TOGGLE_ACTIVE_TODO: "TOGGLE_ACTIVE_TODO",
  CLEAR_ACTIVE_TODO: "CLEAR_ACTIVE_TODO",
  SET_ACTIVE_CATEGORY: "SET_ACTIVE_CATEGORY",
  START_TIMER: "START_TIMER",
  PAUSE_TIMER: "PAUSE_TIMER",
  STOP_TIMER: "STOP_TIMER",
  SET_TIMER: "SET_TIMER",
  TIMER_FINISHED: "TIMER_FINISHED",
  SET_STATE: {
    DEFAULT: "STATE_DEFAULT",
    WORK: "STATE_WORK",
    REST: "STATE_REST",
    BREAK: "STATE_BREAK",
    SETTINGS: "STATE_SETTINGS",

    // state constants
    //   not really actions but it makes
    //   some sense for them to be here
    TASK: {
      ANY: "TASK_ANY",
      FIRST: "TASK_FIRST",
      RANDOM: "TASK_RANDOM",
      SELECT: "TASK_SELECT"
    }
  },
  REQUEST_STATE_CHANGE: "REQUEST_STATE_CHANGE",
  CONFIRM_STATE_CHANGE: "CONFIRM_STATE_CHANGE",
  SET_SETTING: {
    WORK_TIME: "SET_WORK_TIME",
    REST_TIME: "SET_REST_TIME",
    BREAK_TIME: "SET_BREAK_TIME"
  },
  SET_PROGRAM: "SET_PROGRAM",
  ADVANCE_PROGRAM: "ADVANCE_PROGRAM",
  RESET_PROGRAM: "RESET_PROGRAM",
  TOGGLE_LEFT_MENU: "TOGGLE_LEFT_MENU",
}

export default Object.freeze(actions); // because we can!