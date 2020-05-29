import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';


export const NotFound: FunctionComponent<{}> = () => {
  return (
    <>
      <h1>Sorry, page not found. 404</h1>
      <Link to='/'><h2>Back to main page</h2></Link>
    </>

  )
}