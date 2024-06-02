import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevVal) => prevVal + 1);
  };

  const decrement = () => {
    setCount((prevVal) => prevVal - 1);
  };

  return (
    <div className={classes.flex}>
      <button onClick={decrement}>Decrement</button>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
