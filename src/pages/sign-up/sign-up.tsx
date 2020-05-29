import React, { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import app from "@/services/firebase";

const SignUp: FunctionComponent<any> = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
          <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
          <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                <Link to='/'><b>go to main page</b></Link>
            </p>
        </div>
    );
};

export default withRouter(SignUp);