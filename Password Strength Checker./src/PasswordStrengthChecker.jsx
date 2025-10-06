import React, { useState } from 'react';

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluateStrength = (pwd) => {
    if (!pwd) return '';

    let score = 0;

    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) score++;

    if (score <= 2) return 'Weak';
    if (score <= 4) return 'Moderate';
    if (score === 5) return 'Strong';
    return 'Very Strong';
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(evaluateStrength(pwd));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
        flexDirection: 'column',
        backgroundColor: '#f5f5f5', // optional background
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        style={{
          padding: '10px',
          width: '300px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '10px',
        }}
      />
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '18px',
          color:
            strength === 'Weak'
              ? 'red'
              : strength === 'Moderate'
              ? 'orange'
              : strength === 'Strong'
              ? 'green'
              : strength === 'Very Strong'
              ? 'darkgreen'
              : 'black',
        }}
      >
        Strength: {strength}
      </div>
    </div>
  );
}

export default PasswordStrengthChecker;
