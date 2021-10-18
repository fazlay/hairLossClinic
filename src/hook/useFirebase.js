import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import initializeAuthentication from '../component/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
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

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError('');

        // setUserName();
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
      });
  };

  // const setUserName = () => {
  //   updateProfile(auth.currentUser, { displayName: name })
  //     .then(result => { })
  // }

  //------------------------------------with email password

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
    createUserWithEmailAndPassword,
  };
};

export default useFirebase;
