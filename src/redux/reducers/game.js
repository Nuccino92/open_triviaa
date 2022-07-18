import {
  GAME_LOG,
  INITIATE_CASUAL,
  INITIATE_RANKED,
  RESET_GAME,
} from "../actions/types";

const initialValue = {
  questions: [],
  mode: null,
  gameLog: {},
};

const gameReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INITIATE_RANKED:
      return {
        questions: action.payload,
        mode: "ranked",
      };

    case INITIATE_CASUAL:
      return {
        questions: action.payload,
        mode: "casual",
      };

    case RESET_GAME:
      return {
        questions: [],
        mode: null,
      };

    case GAME_LOG:
      return {
        ...state,
        gameLog: action.payload,
      };

    default:
      return state;
  }
};

export default gameReducer;
