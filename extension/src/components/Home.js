import './Home.css';
import { getAuth } from '@firebase/auth';
import app from '../firebase';
import { useRef, useEffect } from 'react';

const Home = () => {
  const auth = getAuth(app);

  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('error:', err);
      });
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="home">
      <h1>Welcome to Eagle Eye</h1>
      <video ref={videoRef} />
      <button className="home__logout">Take a photo</button>
      <button onClick={logout} type="submit" className="home__logout">
        Logout
      </button>
    </div>
  );
};

export default Home;
