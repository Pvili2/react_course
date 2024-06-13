import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from "../../store/cart-slice.js"
const CartButton = (props) => {
  const dispatch = useDispatch();
  const isShowing = useSelector(state => state.cart.cartShowing)
  const cart = useSelector(state => state.cart.items)
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCartShowing = () => {
    dispatch(actions.isShowing())
  }
  console.log(isShowing)
  return (
    <button onClick={handleCartShowing} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
