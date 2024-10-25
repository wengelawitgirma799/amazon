import React, { createContext, useReducer, useState } from "react";
//useReducer: A hook that manages state based on a reducer function.
export const DataContext = createContext();
//provideds the context
export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  //data context return data as reducer and the initial state
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
//value={useReducer(reducer, initialState)}: This sets the context value to the result of useReducer(reducer, initialState), which is an array containing the current state and the dispatch function.

// useReducer(reducer, initialState): Initializes the state and dispatch function using the provided reducer and initialState.