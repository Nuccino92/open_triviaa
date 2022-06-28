import { INITIATE_CASUAL, INITIATE_RANKED } from "../actions/types";

const initialValue = {
  questions: [],
  mode: null,
};

const gameReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INITIATE_RANKED:
      return {
        ...state,
        questions: action.payload,
        mode: "ranked",
      };

    case INITIATE_CASUAL:
      return {
        ...state,
        questions: action.payload,
        mode: "casual",
      };

    default:
      return state;
  }
};

export default gameReducer;
