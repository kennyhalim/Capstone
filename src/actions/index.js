import constants from "./../constants";
const { firebaseConfig, c } = constants;
import Firebase from "firebase";
import Moment from "Moment";

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref("users");

export const signIn = credentials => {
  console.log(credentials.email);
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        console.log("success");
        console.log("firebase");

        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log("error");
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
