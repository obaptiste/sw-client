import initialState from "./initial-state";
import {
  FETCH_STARSHIPS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_SUCCESS,
} from "../constants";

const starshipReducer = (state = initialState.starships, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return { isLoading: true };

    case FETCH_STARSHIPS_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_STARSHIPS_SUCCESS:
      return {
        isLoading: false,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default starshipReducer;
