import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeAuthentication from '../component/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = (name, email, password) => {
  
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  //------------------------------------with email password

  const registerNewUser = (name, email, password) => {
   
    createUserWithEmailAndPassword(auth, email, password,name)
      .then((result) => {
        const user = result.user;
        // console.log(name);
        // setError('');

        setUserName(name);
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
      });
  };

  const setUserName = (name) => {
    console.log(name);
    updateProfile(auth.currentUser, { displayName: name}).then(
      (result) => {
        console.log(user);
      }
    );
  };

  //------------------------------------with email password
  //------------------------------------Log INwith email password
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError('');
      })
      .catch((error) => {
        // setError(error.message);
      });
  };
  //------------------------------------ Log INwith email password

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    registerNewUser,
    createUserWithEmailAndPassword,
    processLogin,
  };
};

export default useFirebase;
