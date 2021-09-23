import app from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //console.log(userCredential.user);
      })
      .catch((error) => console.log(error));
  };

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>By signinn-in you're agreeing to our terms and conditions</p>
        <button onClick={signUp} className="login__signUpButton">
          Set up your Eagle Eye account
        </button>
        <button onClick={googleAuth} className="login__googleSignUp">
          Sign up with google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
