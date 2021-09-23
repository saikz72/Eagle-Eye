import { useAuthState } from 'react-firebase-hooks/auth';
import app from './firebase';
import { getAuth } from 'firebase/auth';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  const [user, loading, error] = useAuthState(getAuth(app));

  if (loading) {
    return <div>Initializing User ....</div>;
  }
  if (error) {
    return <div>Error while loading page ...</div>;
  }

  return <div> {user ? <Home /> : <LoginForm />}</div>;
}

export default App;
