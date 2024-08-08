
// import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Sign() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or send form data to a server here
    setSubmitted(true);
    console.log(form);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        {submitted ? (
          <div>
            <h2>Thank you for signing up, {form.name}!</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default Sign ;
