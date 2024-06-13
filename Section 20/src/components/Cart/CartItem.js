import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/cart-slice';
import { useEffect } from 'react';
import { fetchCartData } from '../../store/cart-slice';
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const handleDecrease = () => {
    dispatch(actions.decreaseQuantity({ item: { title } }))
  }
  const handleIncrease = () => {
    dispatch(actions.increaseQuantity({ item: { title } }))
  }

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
