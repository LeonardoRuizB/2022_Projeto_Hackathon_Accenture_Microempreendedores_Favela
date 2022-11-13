import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigStack } from '../Navigator/NavigatorStackDesLog';
import { NavigStacklog } from '../Navigator/NavigatorStackLog';


export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  return (
    
    !user ? <NavigStack/> : <NavigStacklog/>

  );
}