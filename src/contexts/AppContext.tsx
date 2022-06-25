import React, { createContext, useReducer } from "react";

import { initState, reducer } from "./appReducer";
import { Context } from "../types";

const defaultValue = {
  state: initState,
  dispatch: () => initState
}

export const AppContext = createContext<Context>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initState);

  return(
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}