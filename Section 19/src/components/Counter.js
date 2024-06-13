import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseBy5Handler = () => {
    dispatch(counterActions.increase({ amount: 5 }))
  }
  const counter = useSelector(state => state.counter.counter);
  const isShowing = useSelector(state => state.counter.isShowing)
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowing && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
