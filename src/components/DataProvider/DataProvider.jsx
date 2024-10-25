import React, { createContext, useReducer } from "react";
//import { reducer, initialState } from "../../Utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children,reducer,initialState }) => {
  //const [state, dispatch] = useReducer(reducer, initialState);
//console.log(reducer,initialState)
  return (
    <DataContext.Provider value={useReducer( reducer, initialState )}>
      {children}
    </DataContext.Provider>
  );
};
