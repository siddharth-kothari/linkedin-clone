import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed  from './Feed';
import Login from  './Login'
import Widget from './Widget';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const  user = useSelector(selectUser);
  const dispatch  = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)  {
        //logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
          })
      );
      } else {
        //logged out
        dispatch(logout( ));
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ): (
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      )}
    </div>
  );
}

export default App;