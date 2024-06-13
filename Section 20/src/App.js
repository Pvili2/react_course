import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification'
import { sendCartData } from './store/cart-slice';
let isInitial = true;
function App() {

  const isShowingCart = useSelector(state => state.cart.cartShowing)
  const cart = useSelector(state => state.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.cart.notifications)
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart))
  }, [cart.items, dispatch])
  return (
    <>
      {notifications && <Notification title={notifications.title} message={notifications.message} status={notifications.status} />}
      <Layout>
        {isShowingCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
