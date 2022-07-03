import fetchCasualQuestions from "../../resources/fetchCasualQuestions";
import fetchRankedQuestions from "../../resources/fetchRankedQuestions";
import {
  GAME_LOG,
  GET_ERRORS,
  INITIATE_CASUAL,
  INITIATE_RANKED,
} from "./types";

export const startRankedGame = (selectedCategory) => async (dispatch) => {
  await fetchRankedQuestions(selectedCategory)
    .then((questions) => {
      dispatch({ type: INITIATE_RANKED, payload: questions });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: `Unable to start the game` });
    });
};

export const startCasualGame = (setupInformation) => async (dispatch) => {
  await fetchCasualQuestions(setupInformation)
    .then((questions) => {
      dispatch({ type: INITIATE_CASUAL, payload: questions });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: `Unable to start the game` });
    });
};

export const storePostGameData = (gameLog, score, time) => async (dispatch) => {
  try {
    dispatch({ type: GAME_LOG, payload: { gameLog, score, time } });
  } catch {
    dispatch({
      type: GET_ERRORS,
      payload: `Something went wrong with the Game Log :(`,
    });
  }
};
