import firebase from "firebase/app";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { auth } from "./firebase";
const Login = () => {
    const [currentUser, setCurrentUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    function logIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log("user: ", user);
                const { displayName, email } = user;
                const newUser = { displayName, email };
                setCurrentUser(newUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>Login here</h1>
            <h2>
                <button onClick={logIn}>With google</button>
            </h2>
        </div>
    );
};

export default Login;
