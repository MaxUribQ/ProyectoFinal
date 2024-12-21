import React, { useState } from 'react';
import '../styles/Login.css';

export default function Login(props) {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    if (password !== props.correctPassword) {
      setError(true);
    } else {
      setError(false);
      alert('Login exitoso');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{props.title}</h2>
        <label htmlFor="username">{props.usernameLabel}</label>
        <input type="text" id="username" placeholder={props.usernamePlaceholder} />

        <label htmlFor="password">{props.passwordLabel}</label>
        <input type="password" id="password" placeholder={props.passwordPlaceholder} />

        <button type="submit">{props.buttonText}</button>
        <p className='terms'>{props.termsText}</p>
      </form>
    </div>
  );
}
