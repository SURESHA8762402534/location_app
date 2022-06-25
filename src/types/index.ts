import { Dispatch } from "react";

import { SET_CURRENT_LOCATION, SET_LOCATION_HISTORY } from "../contexts/actions";

export interface Location {
  name: string;
  time: string;
  coords: {
    latitude: number;
    longitude: number;
  }
}

export interface State {
  current: Location;
  history: Location[];
}

type CurrentLocationAction = {
  type: typeof SET_CURRENT_LOCATION;
  payload: State;
}

type LoctionHistoryAction = {
  type: typeof SET_LOCATION_HISTORY;
  payload: Location[];
}

export type Action = CurrentLocationAction | LoctionHistoryAction;

export interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}

export interface ApiResponse {
  success: boolean;
  data: string;
}