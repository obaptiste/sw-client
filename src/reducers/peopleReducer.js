import initialState from "./initial-state";
import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
} from "../constants";

const peopleReducer = (state = initialState.people, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return { isLoading: true };

    case FETCH_PEOPLE_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_PEOPLE_SUCCESS:
      return {
        isLoading: false,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default peopleReducer;
