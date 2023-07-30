import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLE,
} from "./actionTypes";

export const added = (value) => {
  return {
    type: ADDED,
    payload: value,
  };
};

export const toggle = (id) => {
  return {
    type: TOGGLE,
    payload: id,
  };
};

export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};

export const colorSelected = (id, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      id,
      color,
    },
  };
};

export const allCompleted = (id, color) => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearAllCompleted = (id, color) => {
  return {
    type: CLEARCOMPLETED,
  };
};
