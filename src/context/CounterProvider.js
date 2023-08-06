import { createContext, useReducer } from "react";
import { increaseCounter, decreaseCounter, resetCounter } from "../actions";
import { initialState, reducer } from "../reducer";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  const handleDecrease = () => {
    dispatch(decreaseCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const value = {
    total: state.count,
    dispatch: dispatch,
    increase: handleIncrease,
    decrease: handleDecrease,
    reset: handleReset
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;