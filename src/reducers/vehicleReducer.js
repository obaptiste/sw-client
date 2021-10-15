import initialState from "./initial-state";
import {
  FETCH_VEHICLES,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_SUCCESS,
} from "../constants";

const vehicleReducer = (state = initialState.vehicles, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { isLoading: true };

    case FETCH_VEHICLES_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_VEHICLES_SUCCESS:
      return {
        isLoading: false,
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default vehicleReducer;
