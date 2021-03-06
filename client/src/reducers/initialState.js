import { APPSTATE } from "../actions";

const initialState = {
  categories: [{
    title: "Work",
    id: 0,
    active: true,
  },
  {
    title: "Study",
    id: 1,
    active: false,
  }],
  todos: [{
    text: "Reticulate splines",
    id: 0,
    category: 0,
    active: false,
    finished: false,
    pomoCount: 0,
    order: 0
  },
  {
    text: "Create Redux store",
    id: 1,
    category: 0,
    active: true,
    finished: false,
    pomoCount: 2,
    order: 1
  },
  {
    text: "Make coffee",
    id: 2,
    category: 0,
    active: false,
    finished: true,
    pomoCount: 1,
    order: 2
  },
  {
    text: "Learn test-driven development",
    id: 3,
    category: 1,
    active: false,
    finished: false,
    pomoCount: 0,
    order: 0
  }],
  timerRunning: false,
  timerPaused: false,
  timerTime: 60,
  appState: APPSTATE.DEFAULT,
  program: [{
    appState: APPSTATE.WORK,
    time: 10,
    category: null,
    todo: 3
  },
  {
    appState: APPSTATE.REST,
    time: 10
  },
  {
    appState: APPSTATE.WORK,
    time: 10,
    category: 1,
    todo: APPSTATE.TASK.SELECT
  },
  {
    appState: APPSTATE.BREAK,
    time: 10
  },
  {
    appState: APPSTATE.WORK,
    time: 10,
    category: 0,
    todo: APPSTATE.TASK.RANDOM
  },
  {
    appState: APPSTATE.DEFAULT
  }],
  currentProgramIndex: 0,
  stateChangeRequested: false,
  leftMenuOpen: false
}

export default initialState;