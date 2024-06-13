import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile";
import { useSelector } from 'react-redux';
function App() {

  const isAuthicated = useSelector(state => state.auth.isAuthicated)

  console.log(isAuthicated)
  return (
    <>
      <Header />
      {!isAuthicated ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
