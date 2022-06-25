import { SET_LOCATION_HISTORY, SET_CURRENT_LOCATION } from "./actions";

import { Action, State } from "../types";

export const initState: State = {
  current: {
    name: "",
    time: "",
    coords: {
      latitude: 0,
      longitude: 0
    }
  },
  history: []
}

export const reducer = (state = initState, action: Action): State => {

  switch(action.type){
    case SET_CURRENT_LOCATION:
      return action.payload;
    case SET_LOCATION_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
}