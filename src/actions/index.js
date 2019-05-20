import constants from "./../constants";
const { firebaseConfig, c } = constants;
import Firebase from "firebase";

firebase.initializeApp(firebaseConfig);
const users = firebase.database().ref("users");

export const signIn = credentials => {
  console.log(credentials.email);
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        console.log("success");
        dispatch({ type: "LOGIN_SUCCESS", credentials });
      })
      .catch(err => {
        console.log("error");
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signout success");
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
