import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  // useSelector is a hook that allows you to extract data from the Redux store state
  // using a selector function. It takes the entire Redux store state as an argument
  // and returns the part of the state that you want to use in your component.
  // In this case, we are extracting the counter value from the Redux store state.
  // The useSelector hook subscribes the component to the Redux store, so it will re-render
  // whenever the selected state changes.

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
