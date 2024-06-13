import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/cart-slice';
const ProductItem = (props) => {
  const { title, price, description } = props;
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(actions.addCart({ item: props }))
  }
  console.log(items)
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
