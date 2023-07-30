import initialState from "./initialState";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  // COLORSELECTED,
  // CLEARCOMPLETED,
  TOGGLE,
  // ALLCOMPLETED,
} from "./actionTypes";

const idGenerator = (state) => {
  const maxId = state.reduce(
    (maxId, current) => Math.max(current.id, maxId),
    -1
  );

  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: idGenerator(state),
          text: action.payload,
          completed: false
        },
      ];
    case TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });

    case DELETED:
      return state.filter((item) => item.id !== action.payload);

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
      });

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((item) => !item.completed);

    default:
      return state;
  }
};

export default todoReducer;
