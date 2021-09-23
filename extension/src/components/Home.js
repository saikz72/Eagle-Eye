import './Home.css';
import { getAuth } from '@firebase/auth';
import app from '../firebase';

const Home = () => {
  const auth = getAuth(app);

  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="home">
      <h1>Welcome to Eagle Eye</h1>
      <button onClick={logout} type="submit" className="home__logout">
        Logout
      </button>
    </div>
  );
};

export default Home;
