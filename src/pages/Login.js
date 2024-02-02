//Login

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');

    //логика входа и проверок

    // После успешного входа, переход на главную страницу Home
    navigate('/');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Вход</button>
        </div>
        <div>
          No account
          <Link to="/auth/register">Register</Link>
        </div>
      </form>
    </>
  );
}

export default Login;