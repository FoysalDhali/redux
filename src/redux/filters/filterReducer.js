import { COLORCHANGE, STATUSCHANGE } from "./actionsType";

const initialState = {
  status: "all",
  colors: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGE:
      return {
        ...state,
        colors: [...state.colors],
        status: action.payload,
      };

    case COLORCHANGE:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (item) => item !== action.payload.color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
