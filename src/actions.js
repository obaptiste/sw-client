import { getRoots, getPlanets, getPeople } from "./api";
import {
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
  FETCH_PLANETS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_SUCCESS,
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
} from "./constants";

let promiseArray = [];
//const [navArray, setNavArray] = useState([]);

export async function fetchRoots(dispatch, getState) {
  return () => {
    dispatch({ type: FETCH_ROOTS });
    const stateBefore = getState();
    console.log("state before dispatch ", stateBefore.payload.length);
    return getRoots()
      .then(
        (resp, dispatch) =>
          dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp.payload }),
        (error) => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error })
      )
      .then((response) => {
        console.log(response);
        const stateAfter = getState();
        console.log("state after dispatch ", stateAfter.payload.length);
        promiseArray.push(response.payload);
        console.log("nav array ", promiseArray);
      });
  };
}

export async function fetchPlanets() {
  dispatch({ type: FETCH_PLANETS });

  return getPlanets(dispatch).then(
  (resp) => dispatch({ type: FETCH_PLANETS_SUCCESS, payload: resp }),
  (error) => dispatch({ type: FETCH_PLANETS_FAILURE, payload: error })
);



export async function fetchPeople (dispatch) {
  dispatch({ type: FETCH_PEOPLE });
	return getPeople().then
  const request = getPeople();

  return request.then(
    (resp) => dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: resp }),
    (error) => dispatch({ type: FETCH_PEOPLE_FAILURE, payload: error })
  );
};
