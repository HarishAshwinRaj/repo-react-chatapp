import React from "react";
import "./styles.css";
import Home from "./components/Home";
import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQnboF3tQc5Rm84WRHAW5xPW8B_dwEvEk",
  authDomain: "react-chatapp-t1.firebaseapp.com",
  databaseURL: "https://react-chatapp-t1.firebaseio.com",
  projectId: "react-chatapp-t1",
  storageBucket: "react-chatapp-t1.appspot.com",
  messagingSenderId: "440662508713",
  appId: "1:440662508713:web:77e386bee5c5a3a308d5b8",
  measurementId: "G-RXRSRMPZC1"
};
const rrfConfig = { userProfile: "users", useFirestoreForProfile: true };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const store = createStore(rootReducer, {});

const rrfprop = {
  firebase,
  dispatch: store.dispatch,
  config: rrfConfig,
  createFirestoreInstance
};

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfprop}>
        <Home />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
