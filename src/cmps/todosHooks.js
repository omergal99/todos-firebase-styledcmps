import { useState, useEffect, useCallback } from 'react';
// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiV7umKtuBstXNpkISNCoDyt7u213k28I",
  authDomain: "omer-todos-firebase.firebaseapp.com",
  databaseURL: "https://omer-todos-firebase.firebaseio.com",
  projectId: "omer-todos-firebase",
  storageBucket: "omer-todos-firebase.appspot.com",
  messagingSenderId: "212360300149",
  appId: "1:212360300149:web:8c4ec84c04fa735c395a3c",
  measurementId: "G-3ZBDBVE5Q1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const TODOS_URL = '/todos2';

export const useTodos = () => {
  const [state, setState] = useState([{ id: '1', content: 'Loading . . .', isChecked: false }]);

  useEffect(() => {
    firebase.database().ref(TODOS_URL).on('value', snapshot => {
      setState(snapshot.val());
    });

    return () => firebase.database().ref(TODOS_URL).off();
  }, []);

  const syncTasks = useCallback(data => {
    firebase.database().ref(TODOS_URL).set(data);
  }, []);

  return [state, syncTasks];
};
