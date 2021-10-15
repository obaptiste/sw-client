import initialState from "./initial-state";
import {
  FETCH_PLANETS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_SUCCESS,
} from "../constants";

const planetsReducer = (state = initialState.planets, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return { isLoading: true };

    case FETCH_PLANETS_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_PLANETS_SUCCESS:
      return {
        isLoading: false,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default planetsReducer;
