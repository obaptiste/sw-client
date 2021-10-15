import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import starshipsReducer from "./starshipReducer";
import {
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
  FETCH_ROOTS_LOADED,
} from "../constants";
import initialState from "./initial-state";
import peopleReducer from "./peopleReducer";
import planetsReducer from "./planetReducer";
import vehiclesReducer from "./vehicleReducer";
import { getRoots } from "api";

export default combineReducers({
  roots: (state = initialState.roots, action) => {
    switch (action.type) {
      case FETCH_ROOTS:
        return { isLoading: true };

      case FETCH_ROOTS_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        };

      case FETCH_ROOTS_SUCCESS:
        return {
          isLoading: false,
          ...state,
          payload: action.payload,
        };

      case FETCH_ROOTS_LOADED: {
        return action.payload;
      }

      default:
        return state;
    }
  },
  vehicles: vehiclesReducer,
  planet: planetsReducer,
  people: peopleReducer,
  starships: starshipsReducer,
  routing: routerReducer,
});

export async function fetchRoots(dispatch, getState) {
  const response = await getRoots();
  dispatch({ type: "roots/rootsLoaded", payload: response.roots });
}
