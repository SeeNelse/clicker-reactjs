import React from 'react';
import { Link } from "react-router-dom";

const LoginButton = ({props}) => {
  return(
    <Link to={`/map`} className="login__google-button"> Войти </Link>
  )
}

export default LoginButton;