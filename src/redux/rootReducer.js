import  todoReducer  from "./todos/todoReducer";
import filterReducer  from "./filters/filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
