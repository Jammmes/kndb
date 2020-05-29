import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const SignUp: FunctionComponent<{}> = () => {

    return (
        <>
            <h1>Registration page</h1>
            <p>
                <Link to='/'><b>go to main page</b></Link>
            </p>
        </>
    )
}
