import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const Counter = () => {
  const { total, increase, decrease, reset } = useContext(CounterContext);

  return (
    <>
      <h1>Count: {total}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
