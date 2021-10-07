const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD12pvdMtU-6EiMpVlmRPz4BgkCeFXs06A',
  authDomain: 'compass-e0a50.firebaseapp.com',
  projectId: 'compass-e0a50',
  storageBucket: 'compass-e0a50.appspot.com',
  messagingSenderId: '94333808784',
  appId: '1:94333808784:web:18fe0962239de957dce815',
  measurementId: 'G-8N2YHQT39S',
});

const auth = firebaseApp.auth();

const signInBtn = document.querySelector('.login__signInButton');
const form = document.querySelector('form');
const loginDoc = document.querySelector('.login');
const homeDoc = document.querySelector('.home');

const redirectUserIfLoggedIn = (user) => {
  const email = user.email;
  const password = user.password;

  if ((!email, !password)) {
    alert('Please sign in');
    return;
  }
  email.trim().length !== 0 || password.trim().length !== 0 ? (location.href = 'home.html') : alert('Please sign in');
};

chrome.storage.sync.get(['user'], (result) => {
  console.log(result.user);
  redirectUserIfLoggedIn(result.user);
});

// Sign in handler
signInBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  //Form Validation before redirect to home.html
  auth
    .signInWithEmailAndPassword(email, password)
    .then((credentials) => {
      const user = { email: email, password: password };
      chrome.storage.sync.set({ user: user }, () => console.log('Set email and password successfully'));
      //redirect to home.html
      location.href = 'home.html';
    })
    .catch((error) => {
      console.log(error);
    });
});
