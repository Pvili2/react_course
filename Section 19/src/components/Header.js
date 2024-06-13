import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = () => {

  const isAuth = useSelector(state => state.auth.isAuthicated);

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  console.log(isAuth)
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
