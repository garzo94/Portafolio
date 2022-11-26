import React, { createContext, useReducer, useContext } from "react";
import { filterReducer, initialState, FilterActionKind } from "./FilterReducer";

const Context = createContext(initialState);

export function Provider({ children }: any) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  // Price History
  const getFilterType = (value: string) => {
    dispatch({
      type: FilterActionKind.FILTER_APP,
      payload: value,
    });
  };

  const Loading = (): void => {
    dispatch({
      type: FilterActionKind.LOADING,
      payload: "",
    });
  };

  const value = {
    filterType: state.filterType,
    getFilterType,
    loading: state.loading,
    Loading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// Context
const useFilter = () => {
  const context = useContext(Context);

  return context;
};

export default useFilter;
